import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
    private _metaService: Meta,
    private _title: Title,
    private _projectListService: ProjectListService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.addTags();
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

  addTags() {
    this._metaService.addTags([
      {
        name: 'keywords',
        content:
          'web developer projects, getting started with angular, web developer portfolios'
      },
      {
        name: 'description',
        content:
          'Learn to code w/ these fully built features. Contains explanations & code samples. Content is both front & backend dev.'
      },
      { name: 'date.created', content: '2022-10-15', scheme: 'YYYY-MM-DD' },
      { name: 'date.updated', content: '2023-02-05', scheme: 'YYYY-MM-DD' },
      { name: 'date.modified', content: '2023-03-25', scheme: 'YYYY-MM-DD' }
    ]);
    this._title.setTitle('Learn to Code');
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
