import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LocalStorageInterface } from 'src/app/interfaces/localStorage.interface';
import { NavigationData } from 'src/app/interfaces/navigation-date.interface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss']
})
export class CategoryNavigationComponent implements OnInit, OnDestroy {
  dataArray: ProjectsListInterface[] = [];
  navigationArray: NavigationData[] = [];

  unsubscribe$ = new Subject<void>();

  @Input() categoryType: string;
  menuOpen: boolean = false;
  totalDevelopment?: number;
  totalComponents?: number;
  totalProjects?: number;
  windowWidth?: number;
  totalAll?: number;

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _local: LocalStorageService,
    private _router: Router
  ) {
    this._router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.isThereCache();
        return this.categoryType;
      }
    });
  }

  ngOnInit(): void {
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });

    this.isThereCache();
  }

  isThereCache() {
    const storage = this._local.getData('frontenddev');
    if (storage != '') {
      const parsed = JSON.parse(storage);
      this.setTotals(parsed);
      if (Object.keys(parsed[this.categoryType]).length === 0) {
        this.fetchItems();
      }
    } else {
      this.fetchItems();
    }
  }

  fetchItems() {
    new Promise((resolve) => {
      this._projectListService.getAllProjects(this.categoryType, 1, 10);
      resolve(
        this._local.localStorage$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((d) => {
            this.setTotals(d);
          })
      );
    });
  }

  setTotals(obj: LocalStorageInterface) {
    this.totalAll = obj.totals.all;
    this.totalProjects = obj.totals.prj;
    this.totalComponents = obj.totals.cmp;
    this.totalDevelopment = obj.totals.dev;

    this.navigationArray = [
      {
        type: 'all',
        text: 'All',
        total: this.totalAll,
        link: '/javascript-projects'
      },
      {
        type: 'projects',
        text: 'Projects',
        total: this.totalProjects,
        link: '/web-development-projects/front-end-development'
      },
      {
        type: 'cmp',
        text: 'Components',
        total: this.totalComponents,
        link: '/ui-components/website-features'
      },
      {
        type: 'dev',
        text: 'Development',
        total: this.totalDevelopment,
        link: '/web-application-development/learn-to-code'
      }
    ];

    this.dataArray = obj[this.categoryType][1];
  }

  navigateToRoute(obj: NavigationData) {
    this._router.navigateByUrl(obj.link);
    this.menuOpen = false;
  }

  loadCategory(obj: NavigationData) {
    const typeReference = this._local.storage[obj.type];
    this.categoryType = obj.type;
    if (Object.keys(typeReference).length === 0) {
      this.isThereCache();
    } else {
      const key = Object.keys(typeReference)[0];
      this.dataArray = typeReference[key];
    }
  }

  togglePanel() {
    this.menuOpen = !this.menuOpen;
    this.menuOpen
      ? this._globalFeatures.categoryNavigationMenu$.next(true)
      : this._globalFeatures.categoryNavigationMenu$.next(false);
  }

  navigateToCateory() {
    for (let obj of this.navigationArray) {
      this.categoryType === obj.type ? this.navigateToRoute(obj) : '';
    }
  }

  itemNavigation(dataObject: ProjectsListInterface) {
    if (dataObject.internal) {
      this._router.navigateByUrl(dataObject.path);
      this.menuOpen = false;
    } else {
      this._globalFeatures.externalLink(dataObject.path);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
