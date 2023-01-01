import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NasaSearchService } from 'src/app/development/nasa/nasa.service';
import { WindowWidthService } from 'src/app/services/window-width.service';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { Location } from '@angular/common';
import { RelatedComponentsService } from 'src/app/services/related-components.service';

@Component({
  selector: 'app-apps-wrapper',
  templateUrl: './apps-wrapper.component.html'
})
export class AppsWrapperComponent
  implements OnInit, AfterViewChecked, OnDestroy, DoCheck
{
  private unsubscribe$ = new Subject<boolean>();
  appsArray: ProjectsListInterface[] = [];
  threeColumnLayout?: boolean = false;
  windowWidth: number;
  pageTitle?: string;

  constructor(
    private _relatedComponentsService: RelatedComponentsService,
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService,
    private _nasaService: NasaSearchService,
    private _cd: ChangeDetectorRef,
    private _location: Location
  ) {
    // Category Wrapper Related Items
    this._relatedComponentsService.init(this.appsArray, 'projects');
    this._relatedComponentsService.relatedItemsSubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.appsArray = val;
      });
  }

  ngDoCheck(): void {
    // Cornerstone Layout
    if (
      this._location.path() ===
      '/web-development-projects/front-end-development'
    ) {
      this.pageTitle = 'Front End Development';
      this.threeColumnLayout = false;
    } else {
      this.threeColumnLayout = true;
    }
  }

  ngOnInit(): void {
    this._windowWidthService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  pageClickHandler(event: any) {
    if (
      event.target.classList.contains('details') ||
      event.target.classList.contains('right-column') ||
      event.target.nodeName === 'FORM' ||
      event.target.nodeName === 'BUTTON' ||
      event.target.nodeName === 'P' ||
      event.target.parentElement.nodeName === 'FORM'
    ) {
      this._nasaService.changeDatePickerVal(false);
    }
  }

  ngAfterViewChecked(): void {
    this._projectListService.pageDataObjectSubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.pageTitle = val.title;
      });

    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
