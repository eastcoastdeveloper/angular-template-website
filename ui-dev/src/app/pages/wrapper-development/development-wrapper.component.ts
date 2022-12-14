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
import { WindowWidthService } from "src/app/services/window-width.service";
import { Location } from "@angular/common";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-development",
  templateUrl: "./development-wrapper.component.html",
})
export class DevelopmentWrapper implements OnInit, DoCheck, OnDestroy {
  private destroy$ = new Subject<boolean>();
  pageTitle?: string;
  threeColumnLayout?: boolean = false;
  devMenuStatus: boolean;
  windowWidth: number;

  @ViewChild("development", { static: false }) development: ElementRef;
  @ViewChild("menuIcon", { static: false }) menuIcon: ElementRef;

  constructor(
    private _windowWidth: WindowWidthService,
    private _projectListService: ProjectListService,
    private _location: Location,
    private _localStorageService: LocalStorageService
  ) {}

  ngDoCheck(): void {
    // Cornerstone Page Title
    if (this._location.path() === "/web-development/learn-to-code") {
      this.pageTitle = "Learn to Code";
      this.threeColumnLayout = false;
    }
    // On Page Refresh
    // if (this.pageTitle === undefined) {
    //   this._localStorageService.searchCacheForCategory("projects");
    // }
  }

  ngOnInit(): void {
    // Get Window Width
    this._windowWidth.currentWidth$
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
  }

  // toggleDevMenu() {
  //   this.devMenuStatus = !this.devMenuStatus;
  //   this._devMenu.changeValue(this.devMenuStatus);
  // }

  // pageClickHandler(event: any) {
  //   if (
  //     this._devMenu.devMenu &&
  //     event.target != this.development.nativeElement &&
  //     this._devMenu.devMenu &&
  //     event.target != this.menuIcon.nativeElement &&
  //     event.target.parentElement != this.menuIcon.nativeElement
  //   ) {
  //     this._devMenu.closeMenu();
  //   }
  // }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
