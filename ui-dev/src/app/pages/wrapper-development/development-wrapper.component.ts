import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ProjectListService } from "src/app/services/project-list.service";
import { WindowWidthService } from "src/app/services/window-width.service";
import { Location } from "@angular/common";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { RelatedComponentsService } from "src/app/services/related-components.service";

@Component({
  selector: "app-development",
  templateUrl: "./development-wrapper.component.html",
})
export class DevelopmentWrapper
  implements OnInit, DoCheck, AfterViewChecked, OnDestroy
{
  private destroy$ = new Subject<boolean>();
  developmentArray: ProjectsListInterface[] = [];
  threeColumnLayout?: boolean = false;
  devMenuStatus: boolean;
  windowWidth: number;
  pageTitle?: string;
  arrayIndex: number;

  constructor(
    private _windowWidth: WindowWidthService,
    private _projectListService: ProjectListService,
    private _location: Location,
    private _cd: ChangeDetectorRef,
    private _relatedComponentsService: RelatedComponentsService
  ) {
    // Category Wrapper Related Items
    this._relatedComponentsService.init(this.developmentArray, "development");
    this._relatedComponentsService.relatedItemsSubject.subscribe((val) => {
      this.developmentArray = val;
    });
  }

  ngDoCheck(): void {
    // Cornerstone Layout
    if (
      this._location.path() === "/web-application-development/learn-to-code"
    ) {
      this.pageTitle = "Learn to Code";
      this.threeColumnLayout = false;
    } else {
      this.threeColumnLayout = true;
    }
  }

  ngOnInit(): void {
    // Get Window Width
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  ngAfterViewChecked(): void {
    this._projectListService.pageDataObjectSubject.subscribe((val) => {
      this.pageTitle = val.title;
    });

    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
