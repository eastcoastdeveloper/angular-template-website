import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { PageData } from "../interfaces/page-date.interface";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
  public routeData = new Subject<PageData>();
  projectList: ProjectsListInterface[] = [];

  /* Page Title */
  pageDataSource?: ProjectsListInterface;
  private pageDataSubject = new BehaviorSubject(this.pageDataSource);
  pageData$ = this.pageDataSubject.asObservable();

  constructor(private _http: HttpClient) {}

  getDataFromAPI() {
    console.log("fired");
    this._http
      .get<any>("/app")
      .pipe(
        map((responseData) => {
          const result = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              result.push({ ...responseData[key] });
              console.log(result);
            }
          }
          return result;
        })
      )
      .subscribe((data) => {
        this.projectList = data as ProjectsListInterface[];
      });
  }

  // getTemporaryJSON() {
  //   this._http.get("assets/json/projectsList.json").subscribe((data) => {
  //     this.projectList = data as ProjectsListInterface[];
  //   });
  // }

  /* Project Data */
  changeProjectData(obj: ProjectsListInterface) {
    this.pageDataSubject.next(obj);
  }
}
