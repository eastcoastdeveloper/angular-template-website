import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
  pageData = new Subject<ProjectsListInterface[]>();
  projectList: ProjectsListInterface[] = [];

  /* Page Title */
  pageDataSource?: ProjectsListInterface;
  private pageDataSubject = new BehaviorSubject(this.pageDataSource);
  pageData$ = this.pageDataSubject.asObservable();

  constructor(private _http: HttpClient) {}

  getDataFromAPI() {
    return this._http
      .get<any>("/app")
      .pipe(
        map((responseData) => {
          const result: any[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              result.push({ ...responseData[key] });
            }
          }
          return result;
        })
      )
      .subscribe((data) => {
        this.projectList = data as ProjectsListInterface[];
        this.pageData.next(this.projectList);
      });
  }

  /* Project Data */
  changeProjectData(obj: ProjectsListInterface) {
    this.pageDataSubject.next(obj);
  }
}
