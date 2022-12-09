import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { NasaSearchService } from "src/app/development/nasa/nasa.service";
import { ProjectListService } from "src/app/services/project-list.service";
import { DevMenuService } from "src/app/services/dev-menu.service";
import { WindowWidthService } from "src/app/services/window-width.service";

@Component({
  selector: "app-apps-wrapper",
  templateUrl: "./apps-wrapper.component.html",
  styleUrls: ["./apps-wrapper.component.scss"],
})
export class AppsWrapperComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  devMenuStatus?: boolean;
  windowWidth: number;
  pageTitle?: string;
  threeColumnLayout?: boolean = false;

  @ViewChild("projects", { static: false }) projects: ElementRef;
  @ViewChild("menuIcon", { static: false }) menuIcon: ElementRef;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService,
    private _devMenu: DevMenuService,
    private _nasaService: NasaSearchService
  ) {}

  ngOnInit(): void {
    this._windowWidthService.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });

    // Get Page Title & Layout Type
    this._projectListService.pageData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.pageTitle = val?.title;
        val?.title === "Front End Development"
          ? (this.threeColumnLayout = false)
          : (this.threeColumnLayout = true);
      });

    this._devMenu.devMenuState$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.devMenuStatus = val;
      });
  }

  toggleDevMenu() {
    this.devMenuStatus = !this.devMenuStatus;
    this._devMenu.changeValue(this.devMenuStatus);
  }

  pageClickHandler(event: any) {
    if (
      // if dev menu's open & click evt != dev menu, or dev menu's open & click evt != dev menu icon & click evt parent != menu icon
      this._devMenu.devMenu &&
      event.target != this.projects.nativeElement &&
      this._devMenu.devMenu &&
      event.target != this.menuIcon.nativeElement &&
      event.target.parentElement != this.menuIcon.nativeElement
    ) {
      this._devMenu.closeMenu();
    }
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
