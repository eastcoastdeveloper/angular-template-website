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
  allBooks: any = [];
  currentIndex: number = 0;
  markup: string;
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
    views: 677,
    forks: 8,
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
      });
    this.renderCode();
  }

  changeShowcase(i: number) {
    this.resetValues();
    this.result[i].status = true;
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
  }

  resetValues() {
    for (var index = 0; index < this.result.length; index++) {
      this.result[index].status = false;
    }
  }

  private renderCode() {
    this.markup = `
    // typescript-slider.component.html

    <div class="wrapper">
      <div class="slider-bg"></div>
      <div class="tagLine">Top Four AI Books of 2021</div>
      <div id="slider">
        <div class="content">
          <div class="books-wrapper">
            <div *ngFor="let item of result; let i = index" class="showcased-book">
              <div *ngIf="item.status">
                <img src="{{item.url}}">
                <a href="{{item.link}}" target="_blank" class="purchase-btn">Purchase Book</a>
              </div>
            </div>
          </div>
        </div>
      <div class="navigation">
        <div (click)="prevBook()" class="prev">&lt;</div>
        <div (click)="nextBook()" class="next">&gt;</div>
      </div>
    </div>
    <div class="dots">
      <input type="radio"
        [checked]="item.status"
        name="arrPos"
        *ngFor="let item of result; let i = index"
        (click)="changeShowcase(i)">
    </div>
  </div>`;

    this.scss = `
  // typescript-slider.component.scss

  #slider {
    position: relative;
    width: 100%;
    margin: auto;
  }

  .slider-bg {
    background-color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.4;
  }

  .item-visible {
    opacity: 0;
    visibility: hidden;
  }

  a { text-decoration: none; }

  .purchase-btn {
    background-color: white;
    border-radius: 4px;
    padding: 8px 20px;
    font: normal 14px sans-serif;
    margin-top: 10px;
    display: block;
    color: black;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  .tagLine {
    color: white;
    font: normal 18px sans-serif;
    padding: 0;
    text-align: center;
    z-index: 1;
    position: absolute;
    top: 20px;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  .dots {
    text-align: center;
    width: 100%;
    z-index: 10;
    position: absolute;
    bottom: 20px;

    input { cursor: pointer; }
  }

  .dots input[type='radio']:nth-child(2) { margin: 0 0 0 10px; }
  .dots input[type='radio']:nth-child(3) { margin: 0 10px;     }

  .content         { position: relative; }
  .doctor-profiles { height: 100%;       }

  .showcased-book {
    max-width: 200px;
    margin: 0 auto;
    transition: all 0.3s;

    img { width: 100%; }
  }

  .navigation {
    position: absolute;
    color: white;
    width: 100%;
    max-width: 380px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    overflow: auto;
    font: bold 24px sans-serif;

    .prev { float: left;     }
    .next { float: right;    }
    > div { cursor: pointer; }
  }`;

    this.typescript = `
    // typescript-slider.component.ts

    import { HttpClient } from '@angular/common/http';
    import { Component } from '@angular/core';
    import { DataInterface } from './data.interface';

    @Component({
      selector: 'my-app',
      templateUrl: './typescript-slider.component.html',
      styleUrls: ['./typescript-slider.component.scss'],
    })
    export class AppComponent {
      result: DataInterface[] = [];
      currentIndex: number = 0;

      constructor(private _http: HttpClient) {}

      ngOnInit() {
        this._http.get<DataInterface[]>('path-to-json').subscribe((response) => {
          this.result = response;
        });
      }

      changeShowcase(i: number) {
        this.resetValues();
        this.result[i].status = true;
      }

      nextBook() {
        this.getCurrentIndex();
        this.resetValues();
        this.currentIndex++;
        this.currentIndex > this.result.length - 1 ? (this.currentIndex = 0) : "";
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
      }

      resetValues() {
        for (var index = 0; index < this.result.length; index++) {
          this.result[index].status = false;
        }
      }
    }`;

    this.interface = `
    // typescript-slider.interface.ts
    
    export class DataInterface {
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
