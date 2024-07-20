import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, Subject, takeUntil } from 'rxjs';
import { ProjectsListInterface } from '../interfaces/projects-list.interface';
import { PageDataObject } from '../interfaces/pageDataInterface';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { ConfigService } from './config.service';
import { CategoryInterface } from '../interfaces/categories.interface';
// import * as jsonData from '../../assets/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  totalItems$ = new BehaviorSubject<number>(0);
  pageDataObject: PageDataObject = new PageDataObject();
  allProjects$ = new BehaviorSubject<ProjectsListInterface[]>([]);
  pageDataObject$ = new BehaviorSubject<PageDataObject>(this.pageDataObject);
  categoryType$ = new BehaviorSubject<string>('');
  configObject: CategoryInterface;
  projectsURL: string = `../api/compliance-library/`;
  projectArray: ProjectsListInterface[] = [];
  currentRoute: string;
  totalPages: number;
  // dataObj: any = jsonData;

  constructor(
    private _configService: ConfigService,
    private _local: LocalStorageService,
    private _location: LocationStrategy,
    private _http: HttpClient,
    private _router: Router
  ) {
    this._configService.categoryConfig$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.configObject = val;
      });
  }

  // Check for Cache (Called Once OnInit in ProjectList Cmpt)
  isThereCache(type: string, pageNum: number, limit: number) {
    this.categoryType$.next(type);
    const storage = this._local.getData('frontenddev');
    this.projectArray = [];

    this.currentRoute = this._location.path();
    // There IS Cache
    if (storage != '') {
      const parsed = JSON.parse(storage);
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
          this.getLocalProjects(type, pageNum, limit);
          // this.getLocalProjects(type, pageNum, limit);
          resolve(this.saveNewlyCachedData(type, pageNum));
        });
        this.navigateToRoute(pageNum);
      }
    }

    // Nothing's Cached
    else {
      this.getLocalProjects(type, pageNum, limit);
      // this.getLocalProjects(type, pageNum, limit);
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

  // FETCHING LOCAL JSON?
  // USE THIS INSTEAD OF getAllProjects
  // THIS SUBSTITUES THE API. RUN ng serve INSTEAD OF npm run dev
  getLocalProjects(type: string, pageNum: number, pageLimit: number) {
    this._http.get('../../assets/projects.json').subscribe((data) => {
      const results: any = {};
      let filtered: any = [];
      const cat = type;
      const page = pageNum;
      const limit = pageLimit;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      if (type === 'all') {
        filtered = data;
      } else {
        const obj = Object.values(data);
        for (var i = 0; i < obj.length; i++) {
          if (obj[i].category === type) {
            filtered.push(obj[i]);
          }
        }
      }

      results[type] = filtered.slice(startIndex, endIndex);
      results.totals = {
        all: Object.values(data).length,
        leadership: this.categoryAmnt(data, 'leadership'),
        standards: this.categoryAmnt(data, 'standards'),
        security: this.categoryAmnt(data, 'security')
      };

      this.totalPages = Math.ceil(results['totals'][type] / 10);
      this.totalItems$.next(this.totalPages);
      this.allProjects$.next(results[type]);
      this.navigateToRoute(pageNum);
    });
  }

  // CATEGORY COUNT FOR LOCAL JSON
  categoryAmnt(data: any, cat: string) {
    const count = data.filter((item: { category: string }) => {
      return item.category === cat;
    });
    return count.length;
  }

  // FETCH W/ AN API
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
              // console.log(allProjects);
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
          if (type === 'all') {
            this._local.storage['all'][pageNum] = response['all'];
          }
          if (type === this.configObject.categoryOne) {
            this._local.storage[this.configObject.categoryOne][pageNum] =
              response[this.configObject.categoryOne];
          }
          if (type === this.configObject.categoryTwo) {
            this._local.storage[this.configObject.categoryTwo][pageNum] =
              response[this.configObject.categoryTwo];
          }
          if (type === this.configObject.categoryThree) {
            this._local.storage[this.configObject.categoryThree][pageNum] =
              response[this.configObject.categoryThree];
          }

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
    this._local.storage['totals'][this.configObject.categoryOne] =
      response['totals'][this.configObject.categoryOne];
    this._local.storage['totals'][this.configObject.categoryTwo] =
      response['totals'][this.configObject.categoryTwo];
    this._local.storage['totals'][this.configObject.categoryThree] =
      response['totals'][this.configObject.categoryThree];
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
