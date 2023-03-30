import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectsListInterface } from '../../interfaces/projects-list.interface';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  @ViewChild('leftColumn', { static: false }) leftColumn: ElementRef;
  private unsubscribe$ = new Subject<void>();
  pageDataObject: PageDataObject = {
    threeColumnLayout: false,
    cornerStone: true
  };

  projectsArray: ProjectsListInterface[] = [];
  categoryType: string = 'all';
  windowWidth: number;
  pageQuery: number;

  constructor(
    private _metaService: Meta,
    private _title: Title,
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService,
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

    // Window Width Service
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.windowWidth = value;
      });

    this._projectListService.allProjects$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.projectsArray = val;
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
          'A wide variety of TypeScript and JavaScript projects ranging from components, charts, and websites, to API development.'
      },
      { name: 'date.created', content: '2022-10-15', scheme: 'YYYY-MM-DD' },
      { name: 'date.updated', content: '2023-02-05', scheme: 'YYYY-MM-DD' },
      { name: 'date.modified', content: '2023-03-25', scheme: 'YYYY-MM-DD' }
    ]);
    this._title.setTitle('JavaScript Projects');
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

  // Go to External Page
  navigateToExternalPage(url: string) {
    window.location.href = url;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
