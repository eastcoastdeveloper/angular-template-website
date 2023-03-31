import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { SliderInterface } from 'src/app/interfaces/slider.interface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  urlStackblitz: string =
    'https://stackblitz.com/edit/angular-slider-json?file=src%2Fapp%2Fapp.component.ts';
  result: SliderInterface[] = [
    {
      title: 'Driven: The Race to Create the Autonomous Car',
      author: 'Alex Davies',
      status: true,
      url: '../../assets/img/slider-driven.jpg',
      link: 'https://www.amazon.com/Driven-Race-Create-Autonomous-Car/dp/1501199439',
      altText: 'Yellow book cover with tire tracks.',
      description:
        'The self-driving car has been one of the most vaunted technological breakthroughs of recent years. But early promises that these autonomous vehicles would soon be on the roads have proven premature. Alex Davies follows the twists and turns of the story from its origins to today.'
    },
    {
      title: 'If Then',
      author: 'Jill Lepore',
      status: false,
      url: '../../assets/img/slider-if-then.jpg',
      link: 'https://www.amazon.com/If-Then-Simulmatics-Corporation-Invented/dp/1631496107',
      altText:
        'Modern design, cream background, thin blocks in motion; title, author, NY Times quote;',
      description:
        'A revelatory account of the Cold War origins of the data-mad, algorithmic twenty-first century, from the author of the acclaimed international bestseller These Truths.'
    },
    {
      title: 'The Hype Machine',
      author: 'Sinan Aral',
      status: false,
      url: '../../assets/img/slider-the-hype.jpg',
      link: 'https://www.amazon.com/Hype-Machine-Disrupts-Elections-Health/dp/0525574514/ref=sr_1_1?crid=1X6B1YO06FR1M&dchild=1&keywords=the+hype+machine&qid=1623709586&s=books&sprefix=the+hype+m%2Cstripbooks%2C224&sr=1-1',
      altText:
        'White square shaped book with hype in capitals and a blue smudge in the background',
      description:
        'A landmark insider’s tour of how social media affects our decision-making and shapes our world in ways both useful and dangerous, with critical insights into the social media trends of the 2020 election and beyond '
    },
    {
      title: 'Predict and Surveil',
      author: 'Sarah Brayne',
      status: false,
      url: '../../assets/img/slider-predict.jpg',
      link: 'https://www.amazon.com/Predict-Surveil-Discretion-Future-Policing/dp/0190684097/ref=sr_1_1?dchild=1&keywords=predict+and+surveil&qid=1623709612&s=books&sr=1-1',
      altText:
        'Birds eye view of people spread out and a red sqaure around a targeted small group.',
      description:
        'The scope of criminal justice surveillance has expanded rapidly in recent decades. At the same time, the use of big data has spread across a range of fields, including finance, politics, healthcare, and marketing.'
    }
  ];
  currentIndex: number = 0;
  markup: string;
  productInfo: boolean = false;
  loaded: boolean = false;
  scss: string;
  typescript: string;
  interface: string;

  pageDataObject: PageDataObject = {
    title: 'Angular Slider',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-slider',
    repoLink: 'https://github.com/eastcoastdeveloper/angular-basic-carousel',
    category: 'components',
    views: 885,
    forks: 10,
    threeColumnLayout: true,
    cornerStone: false,
    meta: {
      description:
        'Angular slider component, code, and Stackblitz reference. Easy to customize, clear code explanation, and basic styling.',
      keywords:
        'angular component, styled components typescript, web development project',
      title: 'Angular Slider',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit() {
    this.renderCode();
    this.getSliderImage(this.currentIndex);
  }

  changeShowcase(i: number) {
    this.currentIndex = i;
    this.result[this.currentIndex].url;
    this.resetValues();
    this.result[i].status = true;
  }

  getSliderImage(index: number) {
    this.loaded = true;
    return this.result[index].url;
  }

  nextBook() {
    this.getCurrentIndex();
    this.resetValues();
    this.currentIndex++;
    this.currentIndex > this.result.length - 1 ? (this.currentIndex = 0) : '';
    this.result[this.currentIndex].status = true;
  }

  prevBook() {
    this.getCurrentIndex();
    this.resetValues();
    this.currentIndex > 0
      ? this.currentIndex--
      : (this.currentIndex = this.result.length - 1);
    this.result[this.currentIndex].status = true;
  }

  getCurrentIndex() {
    for (var i = 0; i < this.result.length; i++) {
      if (this.result[i].status) {
        this.currentIndex = i;
      }
    }
    this.productInfo = false;
  }

  resetValues() {
    for (var index = 0; index < this.result.length; index++) {
      this.result[index].status = false;
    }
    this.productInfo = false;
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  private renderCode() {
    this.markup = `<div class="wrapper element-shadow element-margin-top">
    <div class="slider-bg"></div>
    <div class="tagLine">Top Four AI Books of 2023</div>
    <div id="slider">
      <div class="content">
        <div *ngIf="loaded" class="books-wrapper">
          <img
            onerror="this.onerror=null;this.src='path-to-404-image'"
            [src]="getSliderImage(currentIndex)"
            class="element-shadow"
            alt="{{ result[currentIndex].altText }}"
          />
          <div
            class="product-info"
            [ngClass]="{ 'show-product-info': productInfo }"
          >
            {{ result[currentIndex].description }}
          </div>
          <div class="purchase-info">
            <div>
              <a
                href="{{ result[currentIndex].link }}"
                target="_blank"
                class="purchase-btn element-shadow"
                >Purchase Book</a
              >
              <div (click)="productInfo = !productInfo" class="info-wrapper">
                <span>&#x2139;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div (click)="prevBook()" class="prev"><span>&#10140;</span></div>
        <div (click)="nextBook()" class="next"><span>&#10140;</span></div>
      </div>
    </div>
    <div class="dots">
      <input
        type="radio"
        [checked]="item.status"
        name="arrPos"
        *ngFor="let item of result; let i = index"
        (click)="changeShowcase(i)"
      />
    </div>
  </div>`;

    this.scss = `.wrapper {
  display: flex;
  height: 370px;
  border: 1px solid #313b3f;
  padding: 50px 0;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background: rgb(49, 59, 63);
  background: -moz-linear-gradient(
    180deg,
    rgba(49, 59, 63, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(49, 59, 63, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(49, 59, 63, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#313b3f",endColorstr="#ffffff",GradientType=1);
}

#slider {
  position: relative;
  width: 100%;
  padding-top: 15px;
  margin: auto;
}

.slider-bg {
  background-color: #313b3f;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.4;
}

a { text-decoration: none; }

.purchase-info {
  text-align: center;
  > div {
    display: inline-block;
    width: 170px;
    .purchase-btn {
      background-color: #03658c;
      color: #FFFFFF;
      float: left;
      border-radius: 4px;
      padding: 8px 20px;
      font: normal 14px sans-serif;
      margin-top: 10px;
      width: 100px;
    }
    .info-wrapper {
      background-color: #313b3f;
      cursor: pointer;
      color: #FFFFFF;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      float: right;
      position: relative;
      top: 17px;
      span {
        transform: translate(-50%, -50%);
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
      }
    }
  }
}

.tagLine {
  color: #FFFFFF;
  font: normal 18px sans-serif;
  border-bottom: 1px solid #FFFFFF;
  padding: 0;
  text-align: center;
  position: absolute;
  top: 10px;
  padding-bottom: 7px;
  right: 0;
  left: 0;
  margin: 0 auto;
}

.dots {
  text-align: center;
  border-top: 1px solid #313b3f;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 5px 0;
  position: absolute;
  bottom: 0;

  input { cursor: pointer; }

  input[type='radio'] { accent-color: #03658c; }
}

.dots input[type='radio']:nth-child(2) { margin: 0 0 0 10px; }
.dots input[type='radio']:nth-child(3) { margin: 0 10px;     }

.content { position: relative;   }
.doctor-profiles { height: 100%; }

.books-wrapper {
  max-width: 200px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  .product-info {
    background-color: rgba(0, 0, 0, 0.9);
    font: normal 14px sans-serif;
    height: calc(100% - 49px);
    box-sizing: border-box;
    transition: left 0.25s;
    position: absolute;
    border-radius: 4px;
    line-height: 20px;
    color: #FFFFFF;
    padding: 10px;
    width: 100%;
    top: 0;
    left: 110%;
  }

  img {
    width: 100%;
    border-radius: 4px;
  }
}

.show-product-info { left: 0 !important; }

.navigation {
  transform: translateY(-50%);
  font: bold 24px sans-serif;
  height: calc(100% - 80px);
  position: absolute;
  max-width: 380px;
  margin: 0 auto;
  overflow: auto;
  color: #FFFFFF;
  width: 100%;
  right: 0;
  left: 0;
  top: 50%;

  .prev {
    float: left;
    transform: rotate(-180deg);
    outline: none;
  }

  .next {
    float: right;
    outline: none;
  }

  > div:not(.info-wrapper) {
    height: 100%;
    cursor: pointer;
    > span {
      transform: translateY(-50%);
      position: relative;
      display: block;
      top: 50%;
    }
  }
}

@media screen and (max-width: 435px) {
  .navigation {
    margin: 0 15px;
    width: auto;
  }
}`;

    this.typescript = `import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataInterface } from './data.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  private unsubscribe$ = new Subject<void>;
  result: DataInterface[] = [];
  currentIndex: number = 0;
  productInfo: boolean = false;
  loaded: boolean = false;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get<DataInterface[]>(path-to-json')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.result = val;
        this.getSliderImage(this.currentIndex);
      });
  }

  changeShowcase(i: number) {
    this.currentIndex = i;
    this.result[this.currentIndex].url;
    this.resetValues();
    this.result[i].status = true;
  }

  getSliderImage(index: number) {
    this.loaded = true;
    return this.result[index].url;
  }

  nextBook() {
    this.getCurrentIndex();
    this.resetValues();
    this.currentIndex++;
    this.currentIndex > this.result.length - 1 ? (this.currentIndex = 0) : '';
    this.result[this.currentIndex].status = true;
  }

  prevBook() {
    this.getCurrentIndex();
    this.resetValues();
    this.currentIndex > 0 ? this.currentIndex-- : (this.currentIndex = this.result.length - 1);
    this.result[this.currentIndex].status = true;
  }

  getCurrentIndex() {
    for (var i = 0; i < this.result.length; i++) {
      if (this.result[i].status) this.currentIndex = i;
    }
    this.productInfo = false;
  }

  resetValues() {
    for (var index = 0; index < this.result.length; index++) {
      this.result[index].status = false;
    }
    this.productInfo = false;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}`;

    this.interface = `export class DataInterface {
  title: string;
  author: string;
  status: boolean;
  url: string;
  link: string;
}`;
  }
}
