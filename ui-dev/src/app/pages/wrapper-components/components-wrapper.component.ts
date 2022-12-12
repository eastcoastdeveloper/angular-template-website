import {
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ProjectListService } from "src/app/services/project-list.service";
import { DevMenuService } from "src/app/services/dev-menu.service";
import { WindowWidthService } from "src/app/services/window-width.service";
import { Location } from "@angular/common";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-components-wrapper",
  templateUrl: "./components-wrapper.component.html",
  styleUrls: ["./components-wrapper.component.scss"],
})
export class ComponentsWrapperComponent implements OnInit, DoCheck, OnDestroy {
  pageTitle?: string;
  windowWidth: number;
  destroy$: Subject<boolean> = new Subject<boolean>();
  devMenuStatus?: boolean;
  threeColumnLayout: boolean = false;

  @ViewChild("apps", { static: false }) apps: ElementRef;
  @ViewChild("menuIcon", { static: false }) menuIcon: ElementRef;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _devMenu: DevMenuService,
    private _projectListService: ProjectListService,
    private _location: Location,
    private _localStorageService: LocalStorageService
  ) {}

  ngDoCheck(): void {
    // Cornerstone Page Title
    if (this._location.path() === "/ui-components/html-javascript-css") {
      this.pageTitle = "UI Components";
      this.threeColumnLayout = false;
    }
    // On Page Refresh
    if (this.pageTitle === undefined) {
      this._localStorageService.searchCacheForCategory("ui-components");
    }
  }

  ngOnInit(): void {
    // Get Window Width
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
        this.threeColumnLayout = true;
      });

    // Dev Menu Status
    this._devMenu.devMenuState$.subscribe((val) => {
      this.devMenuStatus = val;
    });
  }

  // toggleDevMenu() {
  //   this.devMenuStatus = !this.devMenuStatus;
  //   this._devMenu.changeValue(this.devMenuStatus);
  // }

  closeDatePicker(event: any) {
    if (
      this._devMenu.devMenu &&
      event.target != this.apps.nativeElement &&
      this._devMenu.devMenu &&
      event.target != this.menuIcon.nativeElement &&
      event.target.parentElement != this.menuIcon.nativeElement
    ) {
      this._devMenu.closeMenu();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
