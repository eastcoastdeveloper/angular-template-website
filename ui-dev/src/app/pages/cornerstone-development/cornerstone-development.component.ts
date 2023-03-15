import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-development-components',
  template: `<app-projects-list-content
    [dataArray]="developmentArray"
  ></app-projects-list-content>`
})
export class CornerstoneDevelopmentComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  pageDataObject: PageDataObject = {
    title: 'Learn to Code',
    cornerStone: true
  };
  developmentArray: ProjectsListInterface[] = [];
  categoryType: string = 'dev';
  pageQuery: number;

  constructor(
    private _projectListService: ProjectListService,
    private _activatedRoute: ActivatedRoute
  ) {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.setPageParamValue(params);
      });

    this._projectListService.allProjects$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.developmentArray = val;
      });
  }

  // Set Query Params
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
