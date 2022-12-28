import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { CachedObject } from "../interfaces/cached-object";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class ProjectCategoryService {
  categorySubject = new BehaviorSubject<ProjectsListInterface[]>([]);

  cachedObject: CachedObject = {
    projects: {
      value: [],
    },
    components: {
      value: [],
    },
    development: {
      value: [],
    },
  };

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  // Remove Duplicate Objects from Cache
  removeDuplicateObjectFromArray(array: ProjectsListInterface[], key: string) {
    var check = new Set();
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  }

  // Call Category API
  configureCategory(type: string) {
    const categoryQuery = this._localStorageService.getData("cats");

    // Something is Cached
    if (categoryQuery != "") {
      this.cachedObject = JSON.parse(categoryQuery);

      // Send To Component (Page is Refreshed)
      if (this.cachedObject[type].value.length > 0) {
        this.categorySubject.next(this.cachedObject[type].value);
      }

      // Category is Not Cached
      if (this.cachedObject[type].value.length === 0) {
        this.fetchCategory(type);
      }
    }

    // There is NO Cache
    if (categoryQuery === "") {
      this.fetchCategory(type);
    }
  }

  fetchCategory(type: string) {
    let allCategories: ProjectsListInterface[] = [];
    const httpOptions = {
      headers: new HttpHeaders(),
    };
    return this._http
      .get<HttpResponse<ProjectsListInterface>>(
        `/api/category/?type=${type}`,
        httpOptions
      )
      .pipe(
        map((responseData) => {
          Object.keys(responseData).filter((currentVal, index) => {
            currentVal === "results"
              ? (allCategories = Object.values(responseData)[index])
              : "";
          });
          allCategories.map((val) => {
            allCategories.push(val);

            // Remove Duplicates
            const filteredCategories = this.removeDuplicateObjectFromArray(
              allCategories,
              "title"
            );

            // Set CachedObject Array Values
            if (type === "projects")
              this.cachedObject.projects.value = filteredCategories;
            if (type === "components")
              this.cachedObject.components.value = filteredCategories;
            if (type === "development")
              this.cachedObject.development.value = filteredCategories;
          });

          this._localStorageService.saveData(
            "cats",
            JSON.stringify(this.cachedObject)
          );

          return allCategories;
        })
      )
      .subscribe(() => {
        this.categorySubject.next(this.cachedObject[type].value);
      });
  }
}
