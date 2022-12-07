import { Component, Inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { WindowWidthService } from "./services/window-width.service";
import { SideBarService } from "./services/sidebar-service";
import { NavigationEnd, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { DevMenuService } from "./services/dev-menu.service";
import { ScrollToTopService } from "./services/scroll-to-top.service";
import { ProjectListService } from "./services/current-route.service";
import { ProjectsListInterface } from "./interfaces/projects-list.interface";
import { DOCUMENT } from "@angular/common";
import { CanonicalService } from "./services/canonical.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: {
    "(window:resize)": "onWindowResize($event)",
  },
})
export class AppComponent implements OnInit, OnDestroy {
  windowSize: any;
  resizeID: any;
  window: any;
  status = "DOWN";

  isMobile: boolean = false;
  sidebarStatus: boolean;
  width: number = window.innerWidth;
  height: number = window.innerWidth;
  mobileWidth: number = 760;
  projectList: ProjectsListInterface[] = [];
  currentRoute: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  pageDetails: ProjectsListInterface = {
    title: "",
    threeColumnLayout: false,
    imgUrl: "",
    description: "",
    path: "",
    altText: "",
    stackblitz: false,
    internal: false,
    views: 0,
    forks: 0,
    publishedOn: "",
    updatedOn: "",
    repoLink: "",
    repoTitle: "",
    showInPage: false,
    category: "",
  };

  constructor(
    private _windowService: WindowWidthService,
    private _sidebarService: SideBarService,
    private _devMenu: DevMenuService,
    private _scrollToTop: ScrollToTopService,
    private _projectListService: ProjectListService,
    private _router: Router,
    private _canonicalService: CanonicalService,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._projectListService.projectList.map((val) => {
          if (this._router.url === val.path) {
            this.pageDetails.title = val.title;
            this.pageDetails.threeColumnLayout = val.threeColumnLayout;
            this.pageDetails.publishedOn = val.publishedOn;
            this.pageDetails.updatedOn = val.updatedOn;
            this.pageDetails.repoTitle = val.repoTitle;
            this.pageDetails.repoLink = val.repoLink;
            this.pageDetails.showInPage = val.showInPage;
            this.pageDetails.category = val.category;
            this.pageDetails.views = val.views;
            this.pageDetails.forks = val.forks;
            this._projectListService.changeProjectData(this.pageDetails);
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this._canonicalService.setCanonicalURL();
    this.isMobile = this.width < this.mobileWidth;
    // if (this._projectListService.projectList.length === 0) {
    // this.getPageData();
    // }

    this._windowService.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.width = currentVal;
      });

    this._sidebarService.currentVal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => (this.sidebarStatus = currentVal));

    this._sidebarService.urlVal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => (this.currentRoute = currentVal));

    this._router.events.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._renderer.removeAttribute(this.document.body, "class");
        this.currentRoute = data.url;
        this._sidebarService.changeRoute(this.currentRoute);
        this._scrollToTop.scrollToTop();
      }
    });
  }

  ngAfterViewInit() {
    this._windowService.changeValue(window.innerWidth);
  }

  // getPageData() {
  //   this._projectListService.getDataFromAPI();
  // }

  closeMobileNav() {
    this._sidebarService.changeValue(false);
  }

  navigateToContact() {
    window.location.href =
      "https://frontenddevelopment.tech/contact/inquire.html";
  }

  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    this._windowService.changeValue(this.width);
    this._sidebarService.changeValue(false);
    this._devMenu.closeMenu();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
