import { Component, Input, OnInit } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number;
  projectsArray: ProjectsListInterface[] = [];
  masterArray: ProjectsListInterface[] = [];

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit(): void {
    // Call API or Use Cached Data
    this.getEndpointData(1, 10);
  }

  // Check Cache ...
  getEndpointData(page: number, limit: number) {
    new Promise((resolve, reject) => {
      this._projectListService.checkCacheBeforeFetch(page, limit);
      resolve(
        this._projectListService.pageData.subscribe((val) => {
          this.projectsArray = val;
        })
      );
    });
  }
}
