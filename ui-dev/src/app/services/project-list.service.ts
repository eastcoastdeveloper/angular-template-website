import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';
import { ProjectsListInterface } from '../interfaces/projects-list.interface';
import { PageDataObject } from '../interfaces/pageDataInterface';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  totalItems$ = new BehaviorSubject<number>(0);
  pageDataObject: PageDataObject = new PageDataObject();
  allProjects$ = new BehaviorSubject<ProjectsListInterface[]>([]);
  pageDataObject$ = new BehaviorSubject<PageDataObject>(this.pageDataObject);

  projectsURL: string = `/api/javascript-projects/`;
  projectArray: ProjectsListInterface[] = [];
  currentRoute: string;
  totalPages: number;

  constructor(
    private _local: LocalStorageService,
    private _location: LocationStrategy,
    private _http: HttpClient,
    private _router: Router
  ) {}

  // Check for Cache (Called Once OnInit in ProjectList Cmpt)
  isThereCache(type: string, pageNum: number, limit: number) {
    const storage = this._local.getData('frontenddev');
    this.projectArray = [];

    this.currentRoute = this._location.path();
    // There IS Cache
    if (storage != '') {
      let parsed = JSON.parse(storage);
      this._local.storage = parsed;

      // If Requested Page is Cached w/ a Value
      // Set Pagination Count
      if (this._local.storage[type].hasOwnProperty(pageNum)) {
        this.totalPages = this._local.storage.totals[type]!;
        this.totalPages = (Math.ceil(this.totalPages / 10) * 10) / 10;
        this.totalItems$.next(this.totalPages);

        this.projectArray = this._local.storage[type][pageNum];
        this.allProjects$.next(this.projectArray);
        this.navigateToRoute(pageNum);
      }

      // Requested Page Called First Time
      else {
        new Promise((resolve) => {
          this.getAllProjects(type, pageNum, limit);
          resolve(this.saveNewlyCachedData(type, pageNum));
        });
        this.navigateToRoute(pageNum);
      }
    }

    // Nothing's Cached
    else {
      this.getAllProjects(type, pageNum, limit);
    }
  }

  navigateToRoute(pageNum: number) {
    this.currentRoute = this._router.url;
    this._router.navigate([this.currentRoute], {
      queryParams: {
        page: pageNum
      }
    });
  }

  // Cache GET Request
  saveNewlyCachedData(type: string, pageNum: number) {
    this._local.storage[type][pageNum] = this.projectArray;
    this._local.saveData('frontenddev', JSON.stringify(this._local.storage));
  }

  // Call All Projects API
  getAllProjects(type: string, pageNum: number, pageLimit: number) {
    const httpOptions = {
      headers: new HttpHeaders()
    };
    // Only Call if Not Cached
    return this._http
      .get<HttpResponse<ProjectsListInterface>>(
        this.projectsURL + `?type=${type}&page=${pageNum}?&limit=${pageLimit}`,
        httpOptions
      )
      .pipe(
        takeUntil(this.unsubscribe$),
        map((response) => {
          let allProjects: ProjectsListInterface[] = [];
          Object.keys(response).filter((currentVal, index) => {
            if (currentVal === type) {
              allProjects = Object.values(response)[index];
            }
            if (currentVal === 'totals') {
              this.totalPages = Math.ceil(response['totals'][type] / 10);
              this.totalItems$.next(this.totalPages);
            }
          });
          allProjects.map((val) => {
            this.projectArray.push(val);
          });

          // Build Storage Object
          if (type === 'all')
            this._local.storage['all'][pageNum] = response['all'];
          if (type === 'projects')
            this._local.storage['projects'][pageNum] = response['projects'];
          if (type === 'cmp')
            this._local.storage['cmp'][pageNum] = response['cmp'];
          if (type === 'dev')
            this._local.storage['dev'][pageNum] = response['dev'];

          this.cacheCategoryTotals(response);
        })
      )
      .subscribe(() => {
        this.allProjects$.next(this._local.storage[type][pageNum]);
      });
  }

  // Square Away Category Totals
  cacheCategoryTotals(response: HttpResponse<ProjectsListInterface>) {
    this._local.storage['totals'].all = response['totals'].all;
    this._local.storage['totals'].prj = response['totals'].prj;
    this._local.storage['totals'].cmp = response['totals'].cmp;
    this._local.storage['totals'].dev = response['totals'].dev;
    this._local.saveData('frontenddev', JSON.stringify(this._local.storage));
  }

  // Called in Every Page to Update Title, Git, Stackblitz, etc.
  changePageDataObject(obj: PageDataObject) {
    return this.pageDataObject$.next(obj);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
