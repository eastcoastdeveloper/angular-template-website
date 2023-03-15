import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NasaSearchService } from 'src/app/development/nasa/nasa.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-apps-wrapper',
  templateUrl: './apps-wrapper.component.html'
})
export class AppsWrapperComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  private unsubscribe$ = new Subject<void>();
  appsArray: ProjectsListInterface[] = [];
  threeColumnLayout?: boolean = false;
  windowWidth: number;
  pageTitle?: string;

  constructor(
    private _globalFeaturesService: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _nasaService: NasaSearchService,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._globalFeaturesService.currentWidth$
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
    this._projectListService.pageDataObject$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.pageTitle = val.title;
        this.threeColumnLayout = val.threeColumnLayout;
      });

    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
