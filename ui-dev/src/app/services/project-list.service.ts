import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavigationEnd, Router, Event } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
  // Subject Shares Data w/ Component
  pageData = new BehaviorSubject<ProjectsListInterface[]>([]);
  pageTitle = new BehaviorSubject<string>("");

  // Searches Cache
  searchQuery: string;

  // Main Array
  projectArray: ProjectsListInterface[] = [];
  pagesFetched: number[] = [];

  /* Page Title */
  pageDataSource?: ProjectsListInterface;
  private pageDataSubject = new BehaviorSubject(this.pageDataSource);
  pageData$ = this.pageDataSubject.asObservable();

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === "/projects") {
        }
      }
    });
  }

  // Remove Duplicate Objects from Cache
  removeDuplicateObjectFromArray(array: ProjectsListInterface[], key: string) {
    var check = new Set();
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  }

  // Check Cache or Call API for Pagination
  checkCacheBeforeFetch(pageNum: number, pageLimit: number) {
    // Check for Cache
    let cachedItems: boolean = false;
    this.searchQuery = this._localStorageService.getData("web-development");
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
        this.pageData.next(this.projectArray);
        return;
      }

      // Other Pages for the First Time
      if (this.projectArray.slice((pageNum - 1) * 10).length === 0) {
        this.getDataFromAPI(pageNum, pageLimit);
        return;
      }

      // Other Pages Once They're Cached
      if (this.projectArray.slice((pageNum - 1) * 10).length > 0) {
        const parsedData = JSON.parse(this.searchQuery);
        this.projectArray = parsedData.slice((pageNum - 1) * 10, pageNum * 10);
        this.pageData.next(this.projectArray);
      }
    }

    // There's NO Cache
    if (this.searchQuery === "") {
      this.getDataFromAPI(pageNum, pageLimit);
    }
  }

  // Call API
  getDataFromAPI(pageNum: number, pageLimit: number) {
    const httpOptions = {
      headers: new HttpHeaders(),
    };
    return this._http
      .get<HttpResponse<ProjectsListInterface>>(
        `/app?page=${pageNum}?&limit=${pageLimit}`,
        httpOptions
      )
      .pipe(
        map((responseData) => {
          let dummyArray: ProjectsListInterface[] = [];
          Object.keys(responseData).filter((currentVal, index) => {
            currentVal === "results"
              ? (dummyArray = Object.values(responseData)[index])
              : "";
          });
          dummyArray.map((val) => {
            this.projectArray.push(val);
          });
          return dummyArray;
        })
      )
      .subscribe((data) => {
        this._localStorageService.saveData(
          "web-development",
          JSON.stringify(this.projectArray)
        );
        this.pageData.next(data);
      });
  }

  /* Project Data */
  changeProjectData(obj: ProjectsListInterface) {
    this.pageDataSubject.next(obj);
  }
}
