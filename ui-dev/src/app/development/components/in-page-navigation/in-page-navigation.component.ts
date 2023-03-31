import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-in-page-navigation',
  templateUrl: './in-page-navigation.component.html',
  styleUrls: ['./in-page-navigation.component.scss']
})
export class InPageNavigationComponent implements OnInit {
  urlStackblitz: string =
    'https://stackblitz.com/edit/in-page-navigation?file=src%2Fapp%2Fapp.component.ts';
  pageDataObject: PageDataObject = {
    title: 'In Page Navigation',
    publishedOn: 'Nov 7, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'in-page-navigation',
    repoLink: 'https://github.com/eastcoastdeveloper/in-page-navigation',
    category: 'development',
    views: 110,
    forks: 0,
    cornerStone: false,
    threeColumnLayout: true,
    meta: {
      description:
        'TypeScript (Angular) in page navigation. Add as many sections as needed. Follow clearly written code & explanations.',
      keywords:
        'web development project, angular ngif, getting started with angular',
      title: 'In Page Navigation',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  markup: string;
  typescript: string;
  style: string;

  @ViewChildren('percentages') percentages: QueryList<ElementRef>;
  @ViewChildren('sections') sections: QueryList<ElementRef>;
  @ViewChild('btnGroup', { static: false }) btnGroup: ElementRef;
  @ViewChild('bar', { static: false }) bar: ElementRef;

  sectionLength = 3;
  barLinkWidth = 0;
  currentSection = 0;
  Math: any;

  constructor(
    private _cd: ChangeDetectorRef,
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
    this.Math = Math;
  }

  ngOnInit(): void {
    this.renderCode();
  }

  ngAfterViewInit() {
    this._cd.detectChanges();

    this.barLinkWidth = 100 / this.sections.length;
    this.bar.nativeElement.setAttribute(
      'style',
      'width:' + this.barLinkWidth + '%'
    );
    this.btnGroup.nativeElement.style.gridTemplateColumns =
      'repeat(' + this.sectionLength + ', auto)';
  }

  navigate(sectionIndex: number) {
    this.currentSection = sectionIndex;
    this.bar.nativeElement.style.width =
      this.barLinkWidth * (sectionIndex + 1) + '%';
  }

  showProgressBar() {
    this.bar.nativeElement.style.height = '22px';
    this.percentages.forEach((val) => {
      val.nativeElement.style.opacity = 1;
    });
  }

  hideProgressBar() {
    this.bar.nativeElement.style.height = '3px';
    this.percentages.forEach((val) => {
      val.nativeElement.style.opacity = 0;
    });
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  private renderCode() {
    this.markup = `<div id="module-name" class="element-shadow element-margin-top">
    <section
      *ngFor="let item of [].constructor(sectionLength)"
    >
      <div #sections>
        {{ 'Section ' + (currentSection + 1) }}
        <div *ngIf="currentSection === 0" class="section-content">
          <div class="group">
            <label for="name">First Name:</label>
            <input type="text" placeholder="Enter a name" id="name" />
          </div>
          <div class="group">
            <label for="occupation">Occupation:</label>
            <input type="text" placeholder="Your occupation" id="occupation" />
          </div>
          <div class="group">
            <label for="title">Title:</label>
            <input type="text" placeholder="Your title" id="title" />
          </div>
        </div>
    
        <div *ngIf="currentSection === 1" class="section-content">
          <div class="group">
            <label for="city">City:</label>
            <input type="text" placeholder="Your city" id="city" />
          </div>
          <div class="group">
            <label for="state">State:</label>
            <input type="text" placeholder="Your state" id="state" />
          </div>
          <div class="group">
            <label for="zip">Zip Code:</label>
            <input type="text" placeholder="Your zip code" id="zip" />
          </div>
        </div>
    
        <div *ngIf="currentSection === 2" class="section-content">Results...</div>
      </div>
    </section>
    <div id="indicator" #bar></div>
    <div id="percent">
      <div
        #percentages
        *ngFor="let percent of [].constructor(sectionLength); let i = index"
      >
        {{ Math.round((100 / sectionLength) * (i + 1)) + '%' }}
      </div>
    </div>
    <div
      class="btn-group"
      #btnGroup
      (mouseover)="showProgressBar()"
      (mouseout)="hideProgressBar()"
    >
      <button
        *ngFor="let btn of [].constructor(sectionLength); let i = index"
        (click)="navigate(i)"
      >
        {{ 'Section ' + (i + 1) }}
      </button>
    </div>
    </div>`;

    this.style = `   #module-name {
      height: 300px;
      border-radius: 6px;
      position: relative;
      font-family: sans-serif;
      overflow: hidden;
    
      #indicator {
        background-color: #313b3f;
        height: 3px;
        position: absolute;
        bottom: 0;
        transition: all 0.5s;
      }
    
      section {
        height: 100%;
        background-color: #FFFFFF;
        border: 1px solid #313b3f;
        border-radius: 6px;
    
        > div {
          font-size: 1.5em;
          width: 100%;
          height: 100%;
          text-transform: uppercase;
          color: #313b3f;
          padding: 20px;
          box-sizing: border-box;
    
          .section-content {
            font: normal 14px sans-serif;
            text-transform: none;
            display: grid;
            grid-template-columns: repeat(3, auto);
            max-width: 500px;
            justify-content: center;
            grid-column-gap: 10px;
            margin: 40px auto 0 auto;
    
            label {
              display: block;
              margin-bottom: 5px;
            }
    
            input {
              padding: 3px;
              color: #313b3f;
              box-sizing: border-box;
              outline: none;
            }
    
            input::placeholder {
              font: normal 12px sans-serif;
            }
          }
        }
      }
    }
    
    .btn-group {
      position: absolute;
      bottom: 35px;
      left: 0;
      right: 0;
      text-align: center;
      display: grid;
      grid-column-gap: 5px;
      width: calc(100% - 30px);
      margin: 0 auto;
    
      button {
        padding: 10px 5px;
        background-color: #03658c;
        color: #FFFFFF;
        border: none;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
      }
    }
    
    #percent {
      display: flex;
      position: absolute;
      width: 100%;
      bottom: 3px;
      font: normal 13px sans-serif;
    
      > div {
        width: 33.3%;
        text-align: center;
        color: #d9a74a;
        opacity: 0;
        transition: opacity 0.5s;
      }
    }
    
    @media screen and (max-width: 600px) {
      #module-name section > div .section-content {
        grid-template-columns: none;
        font-size: 12px;
        margin-top: 5px;
        grid-template-rows: repeat(3, 55px);
      }
    }`;

    this.typescript = `import {
      ChangeDetectorRef,
      Component,
      ElementRef,
      QueryList,
      ViewChild,
      ViewChildren
    } from '@angular/core';
    
    @Component({
      selector: 'my-app',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
    })
    export class AppComponent {
      markup: string;
      typescript: string;
      style: string;
    
      @ViewChildren('percentages') percentages: QueryList<ElementRef>;
      @ViewChildren('sections') sections: QueryList<ElementRef>;
      @ViewChild('btnGroup', { static: false }) btnGroup: ElementRef;
      @ViewChild('bar', { static: false }) bar: ElementRef;
    
      // SET TO ANY AMOUNT!
      sectionLength = 3;
    
      barLinkWidth = 0;
      currentSection = 0;
      Math: any;
    
      constructor(private _cd: ChangeDetectorRef) {
        this.Math = Math;
      }
    
      ngAfterViewInit() {
        this._cd.detectChanges();
    
        this.barLinkWidth = 100 / this.sections.length;
        this.bar.nativeElement.setAttribute(
          'style',
          'width:' + this.barLinkWidth + '%'
        );
        this.btnGroup.nativeElement.style.gridTemplateColumns =
          'repeat(' + this.sectionLength + ', auto)';
      }
    
      navigate(sectionIndex: number) {
        this.currentSection = sectionIndex;
        this.bar.nativeElement.style.width =
          this.barLinkWidth * (sectionIndex + 1) + '%';
      }
    
      showProgressBar() {
        this.bar.nativeElement.style.height = '22px';
        this.percentages.forEach((val) => {
          val.nativeElement.style.opacity = 1;
        });
      }
    
      hideProgressBar() {
        this.bar.nativeElement.style.height = '3px';
        this.percentages.forEach((val) => {
          val.nativeElement.style.opacity = 0;
        });
      }
    }`;
  }
}
