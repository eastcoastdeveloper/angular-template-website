import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-cornerstone-apps",
  templateUrl: "./cornerstone-apps.component.html",
})
export class CornerstoneAppsComponent implements OnInit {
  appsArray: any;

  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this._localStorageService.searchCacheForCategory("projects");
    this._localStorageService.filteredBehaviorSubject.subscribe((val) => {
      this.appsArray = val;
    });
  }
}
