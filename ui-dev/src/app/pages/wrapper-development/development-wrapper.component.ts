import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectListService } from 'src/app/services/project-list.service';
import { WindowWidthService } from 'src/app/services/window-width.service';
import { Location } from '@angular/common';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { RelatedComponentsService } from 'src/app/services/related-components.service';

@Component({
  selector: 'app-development',
  templateUrl: './development-wrapper.component.html'
})
export class DevelopmentWrapper
  implements OnInit, DoCheck, AfterViewChecked, OnDestroy
{
  developmentArray: ProjectsListInterface[] = [];
  private unsubscribe$ = new Subject<boolean>();
  threeColumnLayout?: boolean = false;
  devMenuStatus: boolean;
  windowWidth: number;
  pageTitle?: string;
  arrayIndex: number;

  constructor(
    private _relatedComponentsService: RelatedComponentsService,
    private _projectListService: ProjectListService,
    private _windowWidth: WindowWidthService,
    private _cd: ChangeDetectorRef,
    private _location: Location
  ) {
    // Category Wrapper Related Items
    this._relatedComponentsService.init(this.developmentArray, 'development');
    this._relatedComponentsService.relatedItemsSubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.developmentArray = val;
      });
  }

  ngDoCheck(): void {
    // Cornerstone Layout
    if (
      this._location.path() === '/web-application-development/learn-to-code'
    ) {
      this.pageTitle = 'Learn to Code';
      this.threeColumnLayout = false;
    } else {
      this.threeColumnLayout = true;
    }
  }

  ngOnInit(): void {
    // Get Window Width
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
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
