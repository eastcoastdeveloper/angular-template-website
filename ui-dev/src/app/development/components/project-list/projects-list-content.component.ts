import { Component, Input, OnInit } from "@angular/core";
import { ProjectsListInterface } from "../../../interfaces/projects-list.interface";

@Component({
  selector: "app-projects-list-content",
  templateUrl: "./projects-list-content.component.html",
  styleUrls: ["./projects-list-content.component.scss"],
})
export class ProjectsListContentComponent implements OnInit {
  @Input() dataArray: ProjectsListInterface[] = [];
  @Input() pageHeader: string;

  ngOnInit() {
    console.log(this.dataArray);
  }

  formatViews(val: number | bigint) {
    return new Intl.NumberFormat().format(val);
  }
}
