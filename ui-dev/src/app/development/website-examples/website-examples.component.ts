import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
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
    cornerStone: true
  };

  conseqtaSampleFour: string =
    '../../../assets/projects-grid/conseqta-sample-4.png';

  conseqtaSampleThree: string =
    '../../../assets/projects-grid/conseqta-sample-3.jpg';

  conseqtaSampleTwo: string =
    '../../../assets/projects-grid/conseqta-sample-2.jpg';

  findashSampleOne: string = '../../../assets/projects-grid/findash-1.jpg';
  findashSampleTwo: string = '../../../assets/projects-grid/findash-2.jpg';
  findashSampleThree: string = '../../../assets/projects-grid/findash-3.jpg';
  techblog: string = '../../../assets/projects-grid/tech-blog.jpg';

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

  loadImages() {
    for (let i = 0; i < this.images.length; i++) {
      let img = new Image();
      img.onload = () => {
        this.loaded();
      };
      img.src = this.images[i];
    }
  }

  loaded() {
    this.loadedItems++;
  }

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
    this.loadImages();
  }
}
