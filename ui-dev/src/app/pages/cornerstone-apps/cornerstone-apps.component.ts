import { Component, OnInit } from "@angular/core";
import { ProjectCategoryService } from "src/app/services/project-category.service";

@Component({
  selector: "app-cornerstone-apps",
  templateUrl: "./cornerstone-apps.component.html",
})
export class CornerstoneAppsComponent implements OnInit {
  appsArray: any;

  constructor(private _projectCategoryService: ProjectCategoryService) {}

  ngOnInit(): void {
    new Promise((resolve) => {
      this._projectCategoryService.configureCategory("projects");
      resolve(
        this._projectCategoryService.categorySubject.subscribe((val) => {
          this.appsArray = val;
        })
      );
    });
  }
}
