import { Component, Input } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
})
export class ProjectListComponent {
  @Input() dataArray: ProjectsListInterface[] = [];

  formatViews(val: number | bigint) {
    return new Intl.NumberFormat().format(val);
  }
}
