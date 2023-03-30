import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-cornerstone-components',
  template: `<app-projects-list-content
      [dataArray]="cmpsArray"
    ></app-projects-list-content>
    <app-pagination [categoryProp]="categoryType"></app-pagination> `
})
export class CornerstoneComponentsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  pageDataObject: PageDataObject = {
    title: 'Website Features',
    cornerStone: true
  };

  cmpsArray: ProjectsListInterface[] = [];
  categoryType: string = 'cmp';
  pageQuery: number;

  constructor(
    private _metaService: Meta,
    private _title: Title,
    private _projectListService: ProjectListService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.addTags();
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
        this.removeDuplicates(val);
      });
  }

  addTags() {
    this._metaService.addTags([
      {
        name: 'keywords',
        content:
          'front end development, web development projects, web developer portfolio'
      },
      {
        name: 'description',
        content:
          'An array of website features including but not limited to an accordion, dynamic sidebar, graphs, & data driven tables.'
      },
      { name: 'date.created', content: '2022-10-15', scheme: 'YYYY-MM-DD' },
      { name: 'date.updated', content: '2023-02-05', scheme: 'YYYY-MM-DD' },
      { name: 'date.modified', content: '2023-03-25', scheme: 'YYYY-MM-DD' }
    ]);
    this._title.setTitle('Website Features');
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
