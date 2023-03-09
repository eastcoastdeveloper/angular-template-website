import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-modules-in-angular',
  templateUrl: './modules-in-angular.component.html',
  styleUrls: ['./modules-in-angular.component.scss']
})
export class ModulesInAngularComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();
  windowWidth: number;
  pageDataObject: PageDataObject = {
    title: 'Modules in Angular',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'modules-in-angular',
    repoLink:
      'https://github.com/eastcoastdeveloper/angular-routing-between-modules',
    category: '',
    views: 2604,
    forks: 139,
    cornerStone: true,
    threeColumnLayout: true
  };

  constructor(
    private _globalFeaturesService: GlobalFeaturesService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit() {
    this._globalFeaturesService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
