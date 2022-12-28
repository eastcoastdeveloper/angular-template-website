import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PageDataObject } from "src/app/interfaces/pageDataInterface";
import { ProjectListService } from "src/app/services/project-list.service";
import { WindowWidthService } from "src/app/services/window-width.service";

@Component({
  selector: "app-modules-in-angular",
  templateUrl: "./modules-in-angular.component.html",
  styleUrls: ["./modules-in-angular.component.scss"],
})
export class ModulesInAngularComponent implements OnInit, OnDestroy {
  pageDataObject: PageDataObject = {
    title: "Modules in Angular",
    publishedOn: "Oct 1, 2022",
    updatedOn: "Nov 15, 2022",
    repoTitle: "modules-in-angular",
    repoLink:
      "https://github.com/eastcoastdeveloper/angular-routing-between-modules",
    category: "",
    views: 2126,
    forks: 112,
  };

  windowWidthSubscription: Subscription;
  windowWidth: number;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this.windowWidthSubscription =
      this._windowWidthService.currentWidth$.subscribe((val) => {
        this.windowWidth = val;
      });
  }

  ngOnDestroy(): void {
    this.windowWidthSubscription.unsubscribe();
  }
}
