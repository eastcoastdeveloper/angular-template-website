import { Component, ElementRef, ViewChild } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ProjectListService } from "src/app/services/current-route.service";
import { DevMenuService } from "src/app/services/dev-menu.service";
import { WindowWidthService } from "src/app/services/window-width.service";

@Component({
  selector: "app-components-wrapper",
  templateUrl: "./components-wrapper.component.html",
  styleUrls: ["./components-wrapper.component.scss"],
})
export class ComponentsWrapperComponent {
  pageTitle?: string;
  threeColumnLayout?: boolean = false;
  windowWidth: number;
  destroy$: Subject<boolean> = new Subject<boolean>();
  devMenuStatus?: boolean;

  @ViewChild("apps", { static: false }) apps: ElementRef;
  @ViewChild("menuIcon", { static: false }) menuIcon: ElementRef;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _devMenu: DevMenuService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // Get Window Width
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
        this.threeColumnLayout = val?.threeColumnLayout;
      });

    // Dev Menu Status
    this._devMenu.devMenuState$.subscribe((val) => {
      this.devMenuStatus = val;
    });
  }

  toggleDevMenu() {
    this.devMenuStatus = !this.devMenuStatus;
    this._devMenu.changeValue(this.devMenuStatus);
  }

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
