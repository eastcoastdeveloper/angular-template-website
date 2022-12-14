import { Component } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectCategoryService } from "src/app/services/project-category.service";

@Component({
  selector: "app-development-components",
  templateUrl: "./cornerstone-development.component.html",
})
export class CornerstoneDevelopmentComponent {
  developmentArray: ProjectsListInterface[] = [];

  constructor(private _projectCategoryService: ProjectCategoryService) {}

  ngOnInit(): void {
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
