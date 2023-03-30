import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-website-examples',
  templateUrl: './website-examples.component.html',
  styleUrls: ['./website-examples.component.scss']
})
export class WebsiteExamplesComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'Website Examples',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: '',
    repoLink: '',
    category: '',
    views: 0,
    forks: 0,
    threeColumnLayout: true,
    cornerStone: true,
    meta: {
      description:
        'Website examples showcasing multiple sites I developed. Based on provided mocks or a Wordpress theme. Fast & modern.',
      keywords:
        'web development projects, website examples, web developer portfolilos',
      title: 'Website Examples',
      dateCreated: '2022-10-15',
      dateModified: '2023-10-25'
    }
  };

  urlConseqta = 'https://www.conseqta.com/';
  urlFindash = 'https://conseqta-financial-dashboard-web.conseqta.io/';
  urlBlog = 'https://fredrickjaxx.is/';
  conseqtaSampleFour = '../../../assets/projects-grid/conseqta-sample-4.png';
  conseqtaSampleThree = '../../../assets/projects-grid/conseqta-sample-3.jpg';
  conseqtaSampleTwo = '../../../assets/projects-grid/conseqta-sample-2.jpg';
  findashSampleOne = '../../../assets/projects-grid/findash-1.jpg';
  findashSampleTwo = '../../../assets/projects-grid/findash-2.jpg';
  findashSampleThree = '../../../assets/projects-grid/findash-3.jpg';
  techblog = '../../../assets/projects-grid/tech-blog.jpg';

  images = [
    this.conseqtaSampleFour,
    this.conseqtaSampleThree,
    this.conseqtaSampleTwo,
    this.findashSampleOne,
    this.findashSampleTwo,
    this.findashSampleThree,
    this.techblog
  ];
  loadedItems: number = 0;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    for (let i = 0; i < this.images.length; i++) {
      const img = new Image();
      img.onload = () => {
        this.loaded();
      };
      img.src = this.images[i];
    }
  }

  loaded() {
    this.loadedItems++;
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
