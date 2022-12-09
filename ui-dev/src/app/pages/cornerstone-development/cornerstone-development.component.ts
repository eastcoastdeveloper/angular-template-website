import { Component, OnInit } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "app-development-components",
  templateUrl: "./cornerstone-development.component.html",
})
export class CornerstoneDevelopmentComponent implements OnInit {
  developmentArray: ProjectsListInterface[] = [];
  constructor(private _projectListService: ProjectListService) {}

  ngOnInit(): void {
    this.developmentArray = this._projectListService.projectList;
    let filtered = this.developmentArray.filter((item) => {
      return item.category === "web-development";
    });
    this.developmentArray = filtered;
    this.developmentArray.pop();
  }
}
