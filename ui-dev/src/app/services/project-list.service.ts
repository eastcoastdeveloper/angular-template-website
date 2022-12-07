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

  getDataFromAPI() {
    const httpOptions = {
      headers: new HttpHeaders(),
    };

    return this._http
      .get<HttpResponse<ProjectsListInterface>>("/app", httpOptions)
      .pipe(
        map((responseData) => {
          const result: ProjectsListInterface[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              result.push({ ...responseData[key] });
            }
          }
          return result;
        })
      )
      .subscribe((data) => {
        this._localStorageService.saveData(
          "web-development",
          JSON.stringify(data)
        );

        this.projectList = data as ProjectsListInterface[];
        this.pageData.next(this.projectList);
      });
  }

  /* Project Data */
  changeProjectData(obj: ProjectsListInterface) {
    this.pageDataSubject.next(obj);
  }
}
