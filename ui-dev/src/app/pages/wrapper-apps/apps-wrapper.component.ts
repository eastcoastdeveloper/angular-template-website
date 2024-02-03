import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { NavigationEnd, Router } from '@angular/router';

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
  categoryType: string;
  windowWidth: number;
  pageTitle?: string;
  cornerstone?: boolean;

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _cd: ChangeDetectorRef,
    private _router: Router
  ) {
    this._router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._projectListService.pageDataObject$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe({
            next: (val) => {
              this.pageTitle = val.title;
              this.threeColumnLayout = val.threeColumnLayout;
              this.cornerstone = val.cornerStone;
            }
          });
      }
    });
  }

  ngOnInit(): void {
    this._projectListService.categoryType$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.categoryType = val;
      });
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  ngAfterViewChecked(): void {
    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
