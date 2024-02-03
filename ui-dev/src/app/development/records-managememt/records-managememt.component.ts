import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-angularjs-project',
  templateUrl: './records-managememt.component.html',
  styleUrls: ['./records-managememt.component.scss']
})
export class AngularjsProjectComponent {
  pageDataObject: PageDataObject = {
    title: 'Records Management',
    publishedOn: 'Oct 16, 2017',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angularjs-project',
    repoLink: 'https://github.com/eastcoastdeveloper/angularjs-project',
    category: '',
    views: 2027,
    forks: 0,
    cornerStone: false,
    threeColumnLayout: true
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
