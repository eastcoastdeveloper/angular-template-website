import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-table-in-html',
  templateUrl: './fair-housing.component.html',
  styles: ` .feature-img {
    background: transparent url('../../../assets/images/fair_competition.jpg')
      scroll no-repeat center / cover;
  }`
})
export class FairHousingComponent {
  pageDataObject: PageDataObject = {
    title: 'Fair Housing',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-date-picker',
    repoLink: 'https://github.com/eastcoastdeveloper/Dynamic-HTML-Table',
    category: 'components',
    views: 74,
    forks: 0,
    threeColumnLayout: true,
    cornerStone: false
  };

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
