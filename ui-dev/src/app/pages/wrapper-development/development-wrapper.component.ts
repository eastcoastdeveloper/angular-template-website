import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ProjectListService } from "src/app/services/current-route.service";
import { WindowWidthService } from "src/app/services/window-width.service";
import { DevMenuService } from "../../services/dev-menu.service";

@Component({
  selector: "app-development",
  templateUrl: "./development-wrapper.component.html",
})
export class DevelopmentWrapper implements OnInit, OnDestroy {
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
    // Get Window Width
    this._windowWidth.currentWidth$
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
  }

  toggleDevMenu() {
    this.devMenuStatus = !this.devMenuStatus;
    this._devMenu.changeValue(this.devMenuStatus);
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
