import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { PageDataObject } from "../interfaces/pageDataInterface";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
  filteredBehaviorSubject = new BehaviorSubject<ProjectsListInterface[]>([]);

  // Subject Shares Data w/ Component
  allProjectsSubject = new BehaviorSubject<ProjectsListInterface[]>([]);
  categorySubject = new BehaviorSubject<ProjectsListInterface[]>([]);

  // Page Data Object Initialization
  pageDataObject: PageDataObject = new PageDataObject();
  pageDataObjectSubject = new BehaviorSubject<PageDataObject>(
    this.pageDataObject
  );

  // Searches Cache
  searchQuery: string;

  // Main Array
  projectArray: ProjectsListInterface[] = [];
  pagesFetched: number[] = [];

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  // Remove Duplicate Objects from Cache
  removeDuplicateObjectFromArray(array: ProjectsListInterface[], key: string) {
    var check = new Set();
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  }

  // Check Cache or Call API for Pagination
  checkCacheBeforeFetch(pageNum: number, pageLimit: number) {
    // Check for Cache
    let cachedItems: boolean = false;
    this.searchQuery = this._localStorageService.getData("prjs");
    this.searchQuery.length > 0 ? (cachedItems = true) : (cachedItems = false);

    // There IS Cache
    if (cachedItems) {
      this.projectArray = this.removeDuplicateObjectFromArray(
        JSON.parse(this.searchQuery),
        "title"
      );

      // Page 1
      if (pageNum === 1) {
        this.projectArray = JSON.parse(this.searchQuery).slice(0, 10);
        this.allProjectsSubject.next(this.projectArray);
        return;
      }

      // Other Pages for the First Time
      if (this.projectArray.slice((pageNum - 1) * 10).length === 0) {
        this.getAllProjects(pageNum, pageLimit);
        return;
      }

      // Other Pages Once They're Cached
      if (this.projectArray.slice((pageNum - 1) * 10).length > 0) {
        const parsedData = JSON.parse(this.searchQuery);
        this.projectArray = parsedData.slice((pageNum - 1) * 10, pageNum * 10);
        this.allProjectsSubject.next(this.projectArray);
      }
    }

    // There's NO Cache
    if (this.searchQuery === "") {
      this.getAllProjects(pageNum, pageLimit);
    }
  }

  // Call All Projects API
  getAllProjects(pageNum: number, pageLimit: number) {
    const httpOptions = {
      headers: new HttpHeaders(),
    };
    return this._http
      .get<HttpResponse<ProjectsListInterface>>(
        `/app/all/?page=${pageNum}?&limit=${pageLimit}`,
        httpOptions
      )
      .pipe(
        map((responseData) => {
          let allProjects: ProjectsListInterface[] = [];
          Object.keys(responseData).filter((currentVal, index) => {
            currentVal === "results"
              ? (allProjects = Object.values(responseData)[index])
              : "";
          });
          allProjects.map((val) => {
            this.projectArray.push(val);
          });
          return allProjects;
        })
      )
      .subscribe((data) => {
        this._localStorageService.saveData(
          "prjs",
          JSON.stringify(this.projectArray)
        );
        this.allProjectsSubject.next(data);
      });
  }

  changePageDataObject(obj: PageDataObject) {
    this.pageDataObjectSubject.next(obj);
  }
}
