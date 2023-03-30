import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  pageDataObject: PageDataObject = {
    title: 'Frontend Developer',
    cornerStone: true,
    threeColumnLayout: true
  };

  urlBlog: string = 'https://fredrickjaxx.is/';
  urlBookList: string = 'https://fredrickjaxx.is/about/';
  aboutPicture: string = '../../../../../assets/img/about-photo.jpg';
  urlChartCollection: string =
    'https://stackblitz.com/@eastcoastdeveloper/collections/chart-js-d3';

  constructor(
    private _metaService: Meta,
    private _title: Title,
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this.addTags();
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  addTags() {
    this._metaService.addTags([
      {
        name: 'keywords',
        content:
          'web developer services, full stack web developer, web programmer'
      },
      {
        name: 'description',
        content:
          'Brief synopsis of my career as a Frontend Developer. History, tech stack, & hurdles. In addition to personal projects'
      },
      { name: 'date.created', content: '2022-10-15', scheme: 'YYYY-MM-DD' },
      { name: 'date.updated', content: '2023-02-05', scheme: 'YYYY-MM-DD' },
      { name: 'date.modified', content: '2023-03-25', scheme: 'YYYY-MM-DD' }
    ]);
    this._title.setTitle('About');
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
