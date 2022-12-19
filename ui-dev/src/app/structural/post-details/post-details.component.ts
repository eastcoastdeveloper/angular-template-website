import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/project-list.service";
import { WindowWidthService } from "src/app/services/window-width.service";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  projectListArray: ProjectsListInterface[] = [];
  windowWidthSubscription: Subscription;
  windowWidth: number;
  publishedOn?: string;
  updatedOn?: string;
  repoLink?: string;
  repoTitle?: string;
  showInPage?: boolean;
  views?: number;
  forks?: number;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    this._projectListService.pageDataObjectSubject.subscribe((val) => {
      this.publishedOn = val?.publishedOn;
      this.updatedOn = val?.updatedOn;
      this.repoTitle = val?.repoTitle;
      this.repoLink = val?.repoLink;
      this.showInPage = val?.showInPage;
      this.views = val?.views;
      this.forks = val?.forks;
    });

    this.windowWidthSubscription =
      this._windowWidthService.currentWidth$.subscribe((val) => {
        this.windowWidth = val;
      });
  }

  formatViews(val: number | bigint) {
    return new Intl.NumberFormat().format(val);
  }

  ngOnDestroy(): void {
    this.windowWidthSubscription.unsubscribe();
  }
}
