import {
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { NasaSearchService } from "src/app/development/nasa/nasa.service";
import { WindowWidthService } from "src/app/services/window-width.service";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/project-list.service";
import { Location } from "@angular/common";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-apps-wrapper",
  templateUrl: "./apps-wrapper.component.html",
  styleUrls: ["./apps-wrapper.component.scss"],
})
export class AppsWrapperComponent implements OnInit, OnDestroy, DoCheck {
  destroy$: Subject<boolean> = new Subject<boolean>();
  appsArray: ProjectsListInterface[] = [];
  devMenuStatus?: boolean;
  windowWidth: number;
  pageTitle?: string;
  threeColumnLayout?: boolean = false;

  @ViewChild("projects", { static: false }) projects: ElementRef;
  @ViewChild("menuIcon", { static: false }) menuIcon: ElementRef;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService,
    private _nasaService: NasaSearchService,
    private _location: Location,
    private _localStorageService: LocalStorageService
  ) {}

  ngDoCheck(): void {
    // Cornerstone Page Title
    if (this._location.path() === "/projects/front-end-development") {
      this.pageTitle = "Front End Development";
      this.threeColumnLayout = false;
    }
    // On Page Refresh
    // if (this.pageTitle === undefined) {
    // this._localStorageService.searchCacheForCategory("projects");
    // this._localStorageService.filteredBehaviorSubject.subscribe((val) => {
    //   console.log(val);
    // });
    // }
  }

  ngOnInit(): void {
    this._windowWidthService.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });

    // Retrieve Page Title, Git, Updated, etc
    this._projectListService.pageData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.pageTitle = val?.title;
        // console.log(this.pageTitle);
        this.threeColumnLayout = true;
      });
  }

  // toggleDevMenu() {
  //   this.devMenuStatus = !this.devMenuStatus;
  //   this._devMenu.changeValue(this.devMenuStatus);
  // }

  pageClickHandler(event: any) {
    if (
      event.target.classList.contains("details") ||
      event.target.classList.contains("right-column") ||
      event.target.nodeName === "FORM" ||
      event.target.nodeName === "BUTTON" ||
      event.target.nodeName === "P" ||
      event.target.parentElement.nodeName === "FORM"
    ) {
      this._nasaService.changeDatePickerVal(false);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
