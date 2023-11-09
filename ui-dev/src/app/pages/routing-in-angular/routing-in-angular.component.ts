import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-routing-in-angular',
  templateUrl: './routing-in-angular.component.html',
  styleUrls: ['./routing-in-angular.component.scss']
})
export class RoutingInAngularComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  urlStackblitz: string =
    'https://stackblitz.com/edit/angular-routing-between-modules?file=src%2Fapp%2Fapp-routing.module.ts';
  windowWidth: number;
  componentImport: string;
  featureModule: string;
  basicRouter: string;
  lazyLoading: string;

  pageDataObject: PageDataObject = {
    title: 'Regulatory Environment',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'routing-in-angular',
    repoLink:
      'https://github.com/eastcoastdeveloper/angular-routing-between-modules',
    category: '',
    views: 3104,
    forks: 169,
    cornerStone: false,
    threeColumnLayout: true
  };

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit() {
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
