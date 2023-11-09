import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ConfigService } from 'src/app/services/config.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-cornerstone-components',
  template: `<app-projects-list-content
      [dataArray]="cmpsArray"
    ></app-projects-list-content>
    <app-pagination [categoryProp]="categoryType"></app-pagination>`
})
export class CornerstoneComponentsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  pageDataObject: PageDataObject = {
    cornerStone: true
  };

  cmpsArray: ProjectsListInterface[] = [];
  categoryType: string;
  pageQuery: number;

  constructor(
    private _projectListService: ProjectListService,
    private _activatedRoute: ActivatedRoute,
    private _configService: ConfigService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit(): void {
    this._projectListService.allProjects$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        // this.removeDuplicates(val);
        this.cmpsArray = val;
      });
    this._configService.categoryConfig$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.categoryType = val.categoryTwo;
        this.pageDataObject.title = val.categoryTwo;
      });
    this._activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.setPageParamValue(params);
      });
  }

  removeDuplicates(val: ProjectsListInterface[]) {
    let arr: ProjectsListInterface[] = [];
    val.forEach((item) => {
      arr.push(item);
    });
    this.cmpsArray = [...new Set(arr)];
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
