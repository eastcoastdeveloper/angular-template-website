import { Component } from "@angular/core";
import { PageDataObject } from "src/app/interfaces/pageDataInterface";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectCategoryService } from "src/app/services/project-category.service";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "app-development-components",
  templateUrl: "./cornerstone-development.component.html",
})
export class CornerstoneDevelopmentComponent {
  pageDataObject: PageDataObject = {
    title: "Cornerstone Dev",
  };

  developmentArray: ProjectsListInterface[] = [];

  constructor(
    private _projectCategoryService: ProjectCategoryService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    new Promise((resolve) => {
      this._projectCategoryService.configureCategory("development");
      resolve(
        this._projectCategoryService.categorySubject.subscribe((val) => {
          this.developmentArray = val;
        })
      );
    });
  }
}
