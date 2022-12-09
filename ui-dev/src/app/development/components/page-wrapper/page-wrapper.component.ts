import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { DevMenuService } from "src/app/services/dev-menu.service";
import { ProjectListService } from "src/app/services/project-list.service";
import { WindowWidthService } from "src/app/services/window-width.service";

@Component({
  selector: "app-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styleUrls: ["./page-wrapper.component.scss"],
})
export class PageWrapperComponent {
  @Input() dataArray: ProjectsListInterface[] = [];

  private destroy$ = new Subject<boolean>();
  pageTitle?: string;
  threeColumnLayout?: boolean = false;
  devMenuStatus: boolean;
  windowWidth: number;

  @ViewChild("development", { static: false }) development: ElementRef;
  @ViewChild("menuIcon", { static: false }) menuIcon: ElementRef;

  constructor(
    private _windowWidth: WindowWidthService,
    private _devMenu: DevMenuService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // console.log(this.dataArray);
    // Get Window Width
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });

    // Get Page Title & Layout Type
    // this._projectListService.pageData$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((val) => {
    //     this.pageTitle = val?.title;
    //     console.log(this.pageTitle);

    //     val?.title === "UI Components" || val?.title === "Development"
    //       ? (this.threeColumnLayout = false)
    //       : (this.threeColumnLayout = true);
    //   });
  }

  toggleDevMenu() {
    this.devMenuStatus = !this.devMenuStatus;
    this._devMenu.changeValue(this.devMenuStatus);
  }

  closeDatePicker(event: any) {
    // if (
    //   this._devMenu.devMenu &&
    //   event.target != this.apps.nativeElement &&
    //   this._devMenu.devMenu &&
    //   event.target != this.menuIcon.nativeElement &&
    //   event.target.parentElement != this.menuIcon.nativeElement
    // ) {
    //   this._devMenu.closeMenu();
    // }
  }

  pageClickHandler(event: any) {
    if (
      this._devMenu.devMenu &&
      event.target != this.development.nativeElement &&
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
