import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { NavigationEnd, Router } from '@angular/router';
import { MetaInterface } from 'src/app/interfaces/meta.interface';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  meta? = <MetaInterface>{};
  windowWidth: number;
  pageDataObject: PageDataObject = {
    meta: {
      description:
        'Front end dev resume showcasing previous contracts & full time work. Languages, frameworks, and projects/ clients;',
      keywords:
        'web developer services, full stack web developer, web programmer',
      title: 'Front End Dev Resume',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _router: Router
  ) {
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._projectListService.pageDataObject$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe({
            next: (val) => {
              this.meta = val.meta;
              if (Object.values(val).length) {
                this._globalFeatures.addTags(this.meta!);
              }
            }
          });
      }
    });
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit(): void {
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
