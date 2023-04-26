import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectsListInterface } from '../../interfaces/projects-list.interface';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  @ViewChild('leftColumn', { static: false }) leftColumn: ElementRef;

  private unsubscribe$ = new Subject<void>();
  meta?: {
    description: string;
    keywords: string;
    title: string;
    dateCreated: string;
    dateModified: string;
  };

  pageDataObject: PageDataObject = {
    threeColumnLayout: false,
    cornerStone: true,
    meta: {
      description:
        'A wide variety of TypeScript and JavaScript projects ranging from components, charts, and websites, to API development.',
      keywords:
        'front end development, web development projects, web developer portfolio',
      title: 'JavaScript Projects',
      dateCreated: '2022-10-15',
      dateModified: '2023-10-25'
    }
  };

  projectsArray: ProjectsListInterface[] = [];
  categoryType: string = 'all';
  windowWidth: number;
  pageQuery: number;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
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
    this._activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        console.log(params);
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
