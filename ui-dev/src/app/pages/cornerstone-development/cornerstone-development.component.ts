import { Component } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-development-components",
  templateUrl: "./cornerstone-development.component.html",
})
export class CornerstoneDevelopmentComponent {
  developmentArray: ProjectsListInterface[] = [];

  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this._localStorageService.searchCacheForCategory("web-development");
    this._localStorageService.filteredBehaviorSubject.subscribe((val) => {
      this.developmentArray = val;
    });
  }
}
