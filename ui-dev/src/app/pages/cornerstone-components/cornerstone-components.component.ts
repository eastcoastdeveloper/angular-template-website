import { Component, OnInit } from "@angular/core";
import { PageDataObject } from "src/app/interfaces/pageDataInterface";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectCategoryService } from "src/app/services/project-category.service";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "app-cornerstone-components",
  template: `<app-projects-list-content
    [dataArray]="cmpsArray"
  ></app-projects-list-content>`,
})
export class CornerstoneComponentsComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: "Website Features",
  };

  cmpsArray: ProjectsListInterface[] = [];

  constructor(
    private _projectCategoryService: ProjectCategoryService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    new Promise((resolve) => {
      this._projectCategoryService.configureCategory("components");
      resolve(
        this._projectCategoryService.categorySubject.subscribe((val) => {
          this.cmpsArray = val;
        })
      );
    });
  }
}
