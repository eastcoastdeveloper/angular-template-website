import { Component } from "@angular/core";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-cornerstone-components",
  templateUrl: "./cornerstone-components.component.html",
})
export class CornerstoneComponentsComponent {
  cmpsArray: ProjectsListInterface[] = [];

  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this._localStorageService.searchCacheForCategory("ui-components");
    this._localStorageService.filteredBehaviorSubject.subscribe((val) => {
      this.cmpsArray = val;
    });
  }
}
