import { Component, Input } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
@Component({
  selector: "app-projects-list-content",
  templateUrl: "./projects-list-content.component.html",
  styleUrls: ["./projects-list-content.component.scss"],
})
export class ProjectsListContentComponent {
  @Input() dataArray: ProjectsListInterface[] = [];

  formatViews(val: number | bigint) {
    return new Intl.NumberFormat().format(val);
  }
}
