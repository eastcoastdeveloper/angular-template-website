import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-d3-bar-graph',
  templateUrl: './information-security.component.html',
  styles: `.feature-img {
    background: transparent
      url('../../../assets/images/information_security.jpg') scroll no-repeat
      center / cover;
  }`
})
export class InformationSecurityComponent {
  d3ProjectImage: string = '../../../../assets/projects-grid/d3-bar-graph.png';
  pageDataObject: PageDataObject = {
    title: 'Information Security',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-date-picker',
    repoLink:
      'https://github.com/eastcoastdeveloper/datepicker-angular-component',
    category: 'components',
    views: 330,
    forks: 7,
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
