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
import { NavigationEnd, Router } from '@angular/router';
import { MetaInterface } from 'src/app/interfaces/meta.interface';

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
  cornerstone?: boolean;
  meta? = <MetaInterface>{};

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _nasaService: NasaSearchService,
    private _cd: ChangeDetectorRef,
    private _router: Router
  ) {
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._projectListService.pageDataObject$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe({
            next: (val) => {
              this.pageTitle = val.title;
              this.threeColumnLayout = val.threeColumnLayout;
              this.meta = val.meta;
              this.cornerstone = val.cornerStone;
              if (Object.values(val).length) {
                this._globalFeatures.addTags(this.meta!);
              }
            }
          });
      }
    });
  }

  ngOnInit(): void {
    this._globalFeatures.currentWidth$
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
    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
