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

@Component({
  selector: 'app-components-wrapper',
  templateUrl: './components-wrapper.component.html',
  styleUrls: ['./components-wrapper.component.scss']
})
export class ComponentsWrapperComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  private unsubscribe$ = new Subject<void>();
  compsArray: ProjectsListInterface[] = [];
  categoryType: string = 'cmp';
  threeColumnLayout?: boolean = true;
  relatedItems: ProjectsListInterface[] = [];
  windowWidth: number;
  pageTitle?: string;
  cmpsArray: any;

  meta?: {
    description: string;
    keywords: string;
    title: string;
    dateCreated: string;
    dateModified: string;
  };

  constructor(
    private _globalFeaturesService: GlobalFeaturesService,
    private _projectListService: ProjectListService,
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
              if (Object.values(val).length) {
                this._globalFeaturesService.addTags(this.meta!);
              }
            }
          });
      }
    });
  }

  ngOnInit(): void {
    this._globalFeaturesService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
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
