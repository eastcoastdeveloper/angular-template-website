import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
  pageData = new BehaviorSubject<ProjectsListInterface[]>([]);
  projectList: ProjectsListInterface[] = [];

  /* Page Title */
  pageDataSource?: ProjectsListInterface;
  private pageDataSubject = new BehaviorSubject(this.pageDataSource);
  pageData$ = this.pageDataSubject.asObservable();

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  getDataFromAPI(pageNum: number, pageLimit: number) {
    const httpOptions = {
      headers: new HttpHeaders(),
    };

    return this._http
      .get<HttpResponse<ProjectsListInterface>>(
        `/app?page=${pageNum}&limit=${pageLimit}`,
        httpOptions
      )
      .pipe(
        map((responseData) => {
          console.log(responseData);
          let pageData: ProjectsListInterface[] = [];
          Object.keys(responseData).filter((currentVal, index, arr) => {
            currentVal === "results"
              ? (pageData = Object.values(responseData)[index])
              : "";
          });
          console.log(pageData);

          const result: ProjectsListInterface[] = [];
          for (const key in pageData) {
            if (pageData.hasOwnProperty(key)) {
              result.push({ ...pageData[key] });
            }
          }
          console.log(result);
          return result;
        })
      )
      .subscribe((data) => {
        this._localStorageService.saveData(
          "web-development",
          JSON.stringify(data)
        );
        this.projectList = data;
        this.pageData.next(this.projectList);
      });
  }

  /* Project Data */
  changeProjectData(obj: ProjectsListInterface) {
    this.pageDataSubject.next(obj);
  }
}
