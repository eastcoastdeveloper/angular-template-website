import { Component, Input } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";

@Component({
  selector: "app-related-components",
  templateUrl: "./related-components.component.html",
  styleUrls: ["./related-components.component.scss"],
})
export class RelatedComponentsComponent {
  @Input() dataArray: ProjectsListInterface[] = [];
}
