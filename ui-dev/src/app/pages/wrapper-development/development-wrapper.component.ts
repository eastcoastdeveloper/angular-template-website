import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { NavigationEnd, Router } from '@angular/router';
import { MetaInterface } from 'src/app/interfaces/meta.interface';

@Component({
  selector: 'app-development',
  templateUrl: './development-wrapper.component.html'
})
export class DevelopmentWrapper implements OnInit, AfterViewChecked, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  developmentArray: ProjectsListInterface[] = [];
  threeColumnLayout?: boolean = false;
  meta? = <MetaInterface>{};
  devMenuStatus: boolean;
  windowWidth: number;
  pageTitle?: string;
  cornerstone?: boolean;
  arrayIndex: number;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService,
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

  ngAfterViewChecked(): void {
    this._projectListService.pageDataObject$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.threeColumnLayout = val.threeColumnLayout;
        this.pageTitle = val.title;
      });

    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
