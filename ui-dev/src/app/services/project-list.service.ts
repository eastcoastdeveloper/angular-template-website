import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { LocalStorageInterface } from '../interfaces/localStorage.interface';
import { ProjectsListInterface } from '../interfaces/projects-list.interface';
import { PageDataObject } from '../interfaces/pageDataInterface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  // Subject Shares Data w/ Component
  allProjectsSubject = new BehaviorSubject<ProjectsListInterface[]>([]);
  categorySubject = new BehaviorSubject<ProjectsListInterface[]>([]);

  // Page Data Object Initialization
  pageDataObject: PageDataObject = new PageDataObject();
  pageDataObjectSubject = new BehaviorSubject<PageDataObject>(
    this.pageDataObject
  );

  storageObject: LocalStorageInterface = new LocalStorageInterface();
  projectsURL: string = `/api/javascript-projects/`;
  // Main Array
  projectArray: ProjectsListInterface[] = [];

  projectsWithJSON: { projectName: [] }[] = [];
  pagesFetched: number[] = [];

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  // Check for Cache (Called Once OnInit in ProjectList Cmpt)
  isThereCache(pageNum: number, limit: number) {
    const storage = this._localStorageService.getData('prjx');
    this.projectArray = [];

    // There IS Cache
    if (storage != '') {
      let parsed = JSON.parse(storage);
      this.storageObject = parsed;

      // If Requested Page is Cached w/ a Value
      if (this.storageObject.hasOwnProperty(pageNum)) {
        this.projectArray = this.storageObject[pageNum];
        this.allProjectsSubject.next(this.projectArray);
      }

      // Requested Page Called First Time
      else {
        new Promise((resolve) => {
          this.getAllProjects(pageNum, limit);
          resolve(this.saveNewlyCachedData(pageNum));
        });
      }
    }

    // There's NOTHING Cached
    else {
      this.getAllProjects(pageNum, limit);
    }
  }

  // Cache GET Request
  saveNewlyCachedData(pageNum: number) {
    this.storageObject[pageNum] = this.projectArray;
    this._localStorageService.saveData(
      'prjx',
      JSON.stringify(this.storageObject)
    );
  }

  // Call All Projects API
  getAllProjects(pageNum: number, pageLimit: number) {
    const httpOptions = {
      headers: new HttpHeaders()
    };

    // Only Call if Not Cached
    return this._http
      .get<HttpResponse<ProjectsListInterface>>(
        this.projectsURL + `?page=${pageNum}?&limit=${pageLimit}`,
        httpOptions
      )
      .pipe(
        map((responseData) => {
          let allProjects: ProjectsListInterface[] = [];
          Object.keys(responseData).filter((currentVal, index) => {
            if (currentVal === 'results') {
              allProjects = Object.values(responseData)[index];
              allProjects.map((val) => {
                val.cached = true;
              });
            }
          });
          allProjects.map((val) => {
            this.projectArray.push(val);
          });
          this.storageObject[pageNum] = this.projectArray;
          this._localStorageService.saveData(
            'prjx',
            JSON.stringify(this.storageObject)
          );
        })
      )
      .subscribe(() => {
        this.allProjectsSubject.next(this.storageObject[pageNum]);
      });
  }

  // Called in Every Page to Update Title, Git, Stackblitz, etc.
  changePageDataObject(obj: PageDataObject) {
    return this.pageDataObjectSubject.next(obj);
  }

  // Decipher Whether JSON Powered Projects are Cached
  individualProjectCacheCheck(projectName: string) {
    const storage = this._localStorageService.getData('cmpts');
    this.projectsWithJSON = [];
  }
}
