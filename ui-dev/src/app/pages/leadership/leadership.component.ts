import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ConfigService } from 'src/app/services/config.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
    selector: 'app-leadership',
    template: `<app-projects-list-content
    [dataArray]="appsArray"
  ></app-projects-list-content>`,
    standalone: false
})
export class LeadershipComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  pageDataObject: PageDataObject = {
    cornerStone: true
  };
  appsArray: ProjectsListInterface[] = [];
  categoryType: string;
  pageQuery: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _projectListService: ProjectListService,
    private _configService: ConfigService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit(): void {
    this._projectListService.allProjects$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.appsArray = val;
      });
    this._configService.categoryConfig$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.categoryType = val.categoryOne;
        this.pageDataObject.title = val.categoryOne;
      });

    this._activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.setPageParamValue(params);
      });
  }

  setPageParamValue(params: { [x: string]: any }) {
    undefined === params['page']
      ? (this.pageQuery = 1)
      : (this.pageQuery = params['page']);

    this._projectListService.isThereCache(
      this.categoryType,
      this.pageQuery,
      10
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
