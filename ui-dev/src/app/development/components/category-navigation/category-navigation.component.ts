import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CategoryInterface } from 'src/app/interfaces/categories.interface';
import { LocalStorageInterface } from 'src/app/interfaces/localStorage.interface';
import { NavigationData } from 'src/app/interfaces/navigation-date.interface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ConfigService } from 'src/app/services/config.service';
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
  configObject: CategoryInterface;
  @Input() categoryType: string;
  menuOpen: boolean = false;
  totalDevelopment?: number;
  totalComponents?: number;
  totalProjects?: number;
  windowWidth?: number;
  totalAll?: number;

  constructor(
    private _globalFeaturesService: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService,
    private _configService: ConfigService,
    private _local: LocalStorageService,
    private _router: Router
  ) {
    this._router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.isThereCache();
      }
    });
  }

  ngOnInit(): void {
    this._configService.categoryConfig$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.configObject = val;
      });

    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });

    // this.isThereCache();
    this._globalFeaturesService.getCategoryFromUrl();
    this.categoryType = this._projectListService.categoryType$.value;

    this._local.localStorage$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((d) => {
        this.setTotals(d);
      });
  }

  isThereCache() {
    // const storage = this._local.getData('frontenddev');
    // if (storage != '') {
    //   const parsed = JSON.parse(storage);
    //   console.log(parsed);
    // this.getCategoryFromUrl();
    //   // if (Object.keys(parsed[this.categoryType]).length === 0) {
    //   //   this.fetchItems();
    //   // }
    // } else {
    //   console.log('fasdafs');
    //   this.fetchItems();
    // }
  }

  // getCategoryFromUrl() {
  //   this._globalFeaturesService.getCategoryFromUrl();
  //   // this._projectListService.isThereCache(this.categoryType, 1, 10);
  // }

  // fetchItems() {
  //   new Promise((resolve) => {
  //     this._projectListService.getAllProjects(this.categoryType, 1, 10);
  //     resolve(

  //     );
  //   });
  // }

  setTotals(obj: LocalStorageInterface) {
    this.totalAll = obj.totals.all;
    this.totalProjects = obj.totals[this.categoryType];
    this.totalComponents = obj.totals[this.categoryType];
    this.totalDevelopment = obj.totals[this.categoryType];

    this.navigationArray = [
      {
        type: 'all',
        text: 'All',
        total: this.totalAll,
        link: '/compliance-library'
      },
      {
        type: this.configObject.categoryOne,
        text: this.configObject.categoryOne,
        total: this.totalProjects,
        link: `/${this.configObject.categoryOne}/${this.configObject.categoryOne}-classes`
      },
      {
        type: this.configObject.categoryTwo,
        text: this.configObject.categoryTwo,
        total: this.totalComponents,
        link: `/${this.configObject.categoryTwo}/${this.configObject.categoryTwo}-classes`
      },
      {
        type: this.configObject.categoryThree,
        text: this.configObject.categoryThree,
        total: this.totalDevelopment,
        link: `/${this.configObject.categoryThree}/${this.configObject.categoryThree}-classes`
      }
    ];

    // this.dataArray = obj[this.categoryType][1];
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
