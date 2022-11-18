import { Component, OnInit } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/current-route.service";

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
      return item.category === "components";
    });
    this.cmpsArray = filtered;
    this.cmpsArray.pop();
  }
}
