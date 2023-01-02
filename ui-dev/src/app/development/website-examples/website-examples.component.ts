import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-website-examples',
  templateUrl: './website-examples.component.html',
  styleUrls: ['./website-examples.component.scss']
})
export class WebsiteExamplesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  pageDataObject: PageDataObject = {
    title: 'Website Examples',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 3, 2023',
    repoTitle: '',
    repoLink: '',
    category: '',
    views: 0,
    forks: 0
  };

  @ViewChild('description') description!: ElementRef;
  @ViewChild('projectLink') projectLink!: ElementRef;
  @ViewChild('mainImage') mainImage!: ElementRef;
  @ViewChild('thumbs') thumbs!: ElementRef;

  buttonArray: string[] = ['Software Co.', 'Finance App'];
  activeGallery: string = this.buttonArray[0];
  winWidthSubscription: Subscription = new Subscription();
  currentIndex: number = 0;
  windowWidth!: number;

  softwareCoArray: any = [
    {
      image: '../../../assets/components-grid/website-examples.jpg',
      description:
        "Fully responsive website I developed based on provided designs. Though the UI's built with native JS, it functions like a SPA via partials. Partical animation is pure JS canvas—no libraries.",
      url: 'https://www.conseqta.com/'
    },
    {
      image: '../../../assets/components-grid/conseqta-sample-1.jpg',
      description:
        'An image gallery on desktop turned accordion on mobile. I created it to take JSON data and is reusable like a web component.',
      url: 'https://www.conseqta.com/'
    },
    {
      image: '../../../assets/components-grid/conseqta-sample-2.jpg',
      description:
        "An onslaught of text and images that're vastly transformed between desktop and mobile.",
      url: 'https://www.conseqta.com/'
    },
    {
      image: '../../../assets/components-grid/conseqta-sample-3.jpg',
      description:
        "I developed this responsive, JSON powered, auto playing gallery of image galleries to showcase the company's products.",
      url: 'https://www.conseqta.com/'
    }
  ];

  finDashArray: any = [
    {
      image: '../../../assets/components-grid/findash-1.jpg',
      description:
        'I was the Sr. Developer on this massive Angular application. This slide shows JSON graph components sharing data, and controlled with the date selectors above. Below is a filterable, JSON, paginatined table. Modify the table by the filter icon by hiding/showing rows and/or dragging to reorder the table column sequence.',
      url: 'https://conseqta-financial-dashboard-web.conseqta.io/'
    },
    {
      image: '../../../assets/components-grid/findash-2.jpg',
      description:
        'A date range component I developed. Accessible by clicking the filter, then the date range in the popup.',
      url: 'https://conseqta-financial-dashboard-web.conseqta.io/vendor-main-landing'
    },
    {
      image: '../../../assets/components-grid/findash-3.jpg',
      description:
        "This is the sass product home UI displaying mock data of a company's budget at a glance. Select 1W, 1M, 3M, or 1 year to get relative budget analysis, entirely or categorically. Category (Commitments, Obligations, and Expenditures) links lead to a more in depth analysis. Filter paginated table data, adjust table view settings, and view additional graphical data in the bottom left.",
      url: 'https://conseqta-financial-dashboard-web.conseqta.io/'
    },
    {
      image: '../../../assets/components-grid/findash-4.jpg',
      description:
        'An up close view of the table filter component used on a variety of pages throughout the app.',
      url: 'https://conseqta-financial-dashboard-web.conseqta.io/'
    },
    {
      image: '../../../assets/components-grid/findash-5.jpg',
      description:
        'Site wide, filterable search UI set up to connect to a backend.',
      url: 'https://conseqta-financial-dashboard-web.conseqta.io/search'
    },
    {
      image: '../../../assets/components-grid/findash-6.jpg',
      description:
        'Check out one of the many sidebars accessible by clicking the info icon (i) in the top right.',
      url: 'https://conseqta-financial-dashboard-web.conseqta.io/vendor-contract-details'
    }
  ];

  dataArray: any[] = this.softwareCoArray;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this.winWidthSubscription =
      this._windowWidthService.currentWidth$.subscribe((val) => {
        this.windowWidth = val;
      });
  }

  ngAfterViewInit(): void {
    this.description.nativeElement.innerHTML = this.dataArray[0].description;

    if (this.windowWidth > 950) {
      this.thumbs.nativeElement.style =
        'grid-template-rows: repeat(' + this.dataArray.length + ', 100px)';
    }
  }

  activeSite(evt: any) {
    this.activeGallery = evt.target.innerText;
    if (this.activeGallery === 'Software Co.')
      this.dataArray = this.softwareCoArray.slice();
    if (this.activeGallery === 'Finance App')
      this.dataArray = this.finDashArray.slice();
    this.changeSlideText(0);
  }

  changeMainImg(index: number) {
    this.currentIndex = index;
    this.mainImage.nativeElement.src = this.dataArray[index].image;
    this.changeSlideText(index);
    this.changeProjectLink(index);
  }

  changeSlideText(index: number) {
    this.description.nativeElement.innerHTML =
      this.dataArray[index].description;
    this.changeProjectLink(index);
  }

  changeProjectLink(index: number) {
    this.currentIndex = index;
    this.projectLink.nativeElement.setAttribute(
      'href',
      this.dataArray[index].url
    );
  }

  nextSlide() {
    this.currentIndex >= this.dataArray.length - 1
      ? (this.currentIndex = 0)
      : this.currentIndex++;
    this.changeMainImg(this.currentIndex);
  }

  previousSlide() {
    this.currentIndex === 0
      ? (this.currentIndex = this.dataArray.length - 1)
      : this.currentIndex--;
    this.changeMainImg(this.currentIndex);
  }

  ngOnDestroy(): void {
    this.winWidthSubscription.unsubscribe();
  }
}
