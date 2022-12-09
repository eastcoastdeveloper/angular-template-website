import { Component, OnInit } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "app-cornerstone-components",
  templateUrl: "./cornerstone-components.component.html",
})
export class CornerstoneComponentsComponent implements OnInit {
  cmpsArray: ProjectsListInterface[] = [];

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit(): void {
    this.cmpsArray = this._projectListService.projectList;
    let filtered = this.cmpsArray.filter((item) => {
      return item.category === "ui-components";
    });
    this.cmpsArray = filtered;
    this.cmpsArray.pop();
  }
}

/* 
  ngOnInit(): void {
    // If Local Storage is Empty ...
    if (localStorage.getItem("web-development") === null) {
      new Promise((resolve, reject) => {
        this._projectListService.getDataFromAPI();
        resolve(
          this._projectListService.pageData
            .pipe(takeUntil(this.destroy$))
            .subscribe((val) => {
              this.filterPageData(val);
              console.log(val);
            })
        );
      });
    }
    // If Local Storage Has Key
    else {
      this.cmpsArray = JSON.parse(
        this._localStorageService.getData("web-development")
      );
      this.filterPageData(this.cmpsArray);
    }
  }

  filterPageData(obj: ProjectsListInterface[]) {
    const filtered = obj.filter((item) => {
      return item.category === "components";
    });
    this.cmpsArray = filtered;
    this.cmpsArray.pop();
  }
*/
