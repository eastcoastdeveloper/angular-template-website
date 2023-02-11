import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { SliderInterface } from 'src/app/interfaces/slider.interface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();
  result: SliderInterface[] = [];
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
    cornerStone: false
  };

  constructor(
    private _http: HttpClient,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this._http
      .get<SliderInterface[]>(`./api/slider-component`)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.result = val;
        this.getSliderImage(this.currentIndex);
      });
    this.renderCode();
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

    this.typescript = `    import { HttpClient } from '@angular/common/http';
    import { Component } from '@angular/core';
    import { Subject, takeUntil } from 'rxjs';
    import { DataInterface } from './data.interface';
    
    @Component({
      selector: 'my-app',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
    })

    export class AppComponent {
      private unsubscribe$ = new Subject<boolean>();
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
        this.unsubscribe$.next(true);
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

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
