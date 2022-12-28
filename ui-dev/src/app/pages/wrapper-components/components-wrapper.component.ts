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
  selector: "app-components-wrapper",
  templateUrl: "./components-wrapper.component.html",
  styleUrls: ["./components-wrapper.component.scss"],
})
export class ComponentsWrapperComponent
  implements OnInit, DoCheck, OnDestroy, AfterViewChecked
{
  destroy$: Subject<boolean> = new Subject<boolean>();
  compsArray: ProjectsListInterface[] = [];
  threeColumnLayout: boolean = false;
  devMenuStatus?: boolean;
  windowWidth: number;
  pageTitle?: string;
  cmpsArray: any;

  constructor(
    private _relatedComponentsService: RelatedComponentsService,
    private _windowWidthService: WindowWidthService,
    private _cd: ChangeDetectorRef,
    private _projectListService: ProjectListService,
    private _location: Location
  ) {
    // Category Wrapper Related Items
    this._relatedComponentsService.init(this.cmpsArray, "components");
    this._relatedComponentsService.relatedItemsSubject.subscribe((val) => {
      this.cmpsArray = val;
    });
  }

  ngDoCheck(): void {
    // Cornerstone Layout
    if (this._location.path() === "/ui-components/website-features") {
      this.pageTitle = "UI Components";
      this.threeColumnLayout = false;
    } else {
      this.threeColumnLayout = true;
    }
  }

  ngOnInit(): void {
    // Get Window Width
    this._windowWidthService.currentWidth$
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
