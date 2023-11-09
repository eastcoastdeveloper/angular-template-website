import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-in-page-navigation',
  templateUrl: './in-page-navigation.component.html',
  styleUrls: ['./in-page-navigation.component.scss']
})
export class InPageNavigationComponent {
  pageDataObject: PageDataObject = {
    title: 'Safety & Security',
    publishedOn: 'Nov 7, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'in-page-navigation',
    repoLink: 'https://github.com/eastcoastdeveloper/in-page-navigation',
    category: 'development',
    views: 110,
    forks: 0,
    cornerStone: false
  };
  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
