import { Component, OnInit } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "app-cornerstone-apps",
  templateUrl: "./cornerstone-apps.component.html",
})
export class CornerstoneAppsComponent implements OnInit {
  appsArray: ProjectsListInterface[] = [];

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit(): void {
    this.appsArray = this._projectListService.projectList;
    let filtered = this.appsArray.filter((item) => {
      return item.category === "projects";
    });
    this.appsArray = filtered;
    this.appsArray.pop();
  }
}
