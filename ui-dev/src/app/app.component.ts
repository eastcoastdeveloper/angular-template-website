import { Component, Inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { WindowWidthService } from "./services/window-width.service";
import { SideBarService } from "./services/sidebar-service";
import { NavigationEnd, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { ScrollToTopService } from "./services/scroll-to-top.service";
import { ProjectsListInterface } from "./interfaces/projects-list.interface";
import { DOCUMENT } from "@angular/common";
import { CanonicalService } from "./services/canonical.service";
import { ProjectListService } from "./services/project-list.service";
import { LocalStorageService } from "./services/local-storage.service";

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
    private _scrollToTop: ScrollToTopService,
    private _projectListService: ProjectListService,
    private _router: Router,
    private _canonicalService: CanonicalService,
    private _localStorageService: LocalStorageService,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Update Page Data on Route Change
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        const cachedData = this._localStorageService.getData("web-development");

        // If /web-technologies & There's Cache, Remove Duplicates, & Set projectsArray Value
        if (this._router.url === "/web-technologies" && cachedData.length > 0) {
          const parsedData = JSON.parse(cachedData);
          this._projectListService.projectArray = parsedData;
          this._projectListService.projectArray =
            this._projectListService.removeDuplicateObjectFromArray(
              parsedData,
              "title"
            );
        }

        // Set Global Object Values
        this._projectListService.projectArray.map((val) => {
          if (this._router.url === val.path) {
            this.setValues(val);
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this._canonicalService.setCanonicalURL();
    this.isMobile = this.width < this.mobileWidth;

    // Window Service
    this._windowService.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.width = currentVal;
      });

    // Sidebar Service
    this._sidebarService.currentVal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => (this.sidebarStatus = currentVal));

    this._sidebarService.urlVal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => (this.currentRoute = currentVal));

    // Remove Inability to Scroll
    this._router.events.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._renderer.removeAttribute(this.document.body, "class");
        this.currentRoute = data.url;
        this._sidebarService.changeRoute(this.currentRoute);
        this._scrollToTop.scrollToTop();
      }
    });
  }

  // Reset Window Width Service
  ngAfterViewInit() {
    this._windowService.changeValue(window.innerWidth);
  }

  // Set Post Details Values
  setValues(val: ProjectsListInterface) {
    this.pageDetails.title = val.title;
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
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
