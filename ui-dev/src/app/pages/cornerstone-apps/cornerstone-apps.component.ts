import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-cornerstone-apps',
  template: `<app-projects-list-content
    [dataArray]="appsArray"
  ></app-projects-list-content>`
})
export class CornerstoneAppsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  pageDataObject: PageDataObject = {
    title: 'Front End Development',
    cornerStone: true,
    meta: {
      description:
        'Front end development project samples including but not limited to websites, components, dynamic UIs and much more.',
      keywords:
        'front end development, web development projects, web developer portfolio',
      title: 'Front End Development',
      dateCreated: '2022-10-15',
      dateModified: '2023-10-25'
    }
  };
  appsArray: ProjectsListInterface[] = [];
  categoryType: string = 'projects';
  pageQuery: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _projectListService: ProjectListService
  ) {
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
        this.appsArray = val;
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
