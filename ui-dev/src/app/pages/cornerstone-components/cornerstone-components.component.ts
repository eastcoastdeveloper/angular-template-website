import { Component, OnInit } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectCategoryService } from "src/app/services/project-category.service";

@Component({
  selector: "app-cornerstone-components",
  templateUrl: "./cornerstone-components.component.html",
})
export class CornerstoneComponentsComponent implements OnInit {
  cmpsArray: ProjectsListInterface[] = [];

  constructor(private _projectCategoryService: ProjectCategoryService) {}

  ngOnInit(): void {
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
