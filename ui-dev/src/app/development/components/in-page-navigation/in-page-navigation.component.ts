import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { PageDataObject } from "src/app/interfaces/pageDataInterface";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "app-in-page-navigation",
  templateUrl: "./in-page-navigation.component.html",
  styleUrls: ["./in-page-navigation.component.scss"],
})
export class InPageNavigationComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: "In Page Navigation",
    publishedOn: "Nov 7, 2022",
    updatedOn: "Dec 15, 2022",
    repoTitle: "in-page-navigation",
    repoLink: "https://github.com/eastcoastdeveloper/in-page-navigation",
    category: "development",
    views: 87,
    forks: 0,
  };

  markup: string;
  typescript: string;
  style: string;

  @ViewChildren("sections") sections: QueryList<ElementRef>;
  @ViewChild("btnGroup", { static: false }) btnGroup: ElementRef;
  @ViewChild("bar", { static: false }) bar: ElementRef;

  // SET TO ANY AMOUNT!
  sectionLength = 3;

  barLinkWidth = 0;
  currentSection = 0;
  progress: any = [];
  Math: any;

  constructor(
    private _cd: ChangeDetectorRef,
    private _projectListService: ProjectListService
  ) {
    this.Math = Math;
  }

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
    this.renderCode();
  }

  ngAfterViewInit() {
    this._cd.detectChanges();
    this.progress = Array.prototype.slice.call(
      document.querySelectorAll("#percent > div")
    );
    this.barLinkWidth = 100 / this.sections.length;
    this.bar.nativeElement.setAttribute(
      "style",
      "width:" + this.barLinkWidth + "%"
    );
    this.btnGroup.nativeElement.style.gridTemplateColumns =
      "repeat(" + this.sectionLength + ", auto)";
  }

  navigate(sectionIndex: number) {
    this.currentSection = sectionIndex;
    this.bar.nativeElement.style.width =
      this.barLinkWidth * (sectionIndex + 1) + "%";
  }

  showProgressBar() {
    this.bar.nativeElement.style.height = "22px";
    for (var i = 0; i < this.progress.length; i++) {
      this.progress[i].style.opacity = 1;
    }
  }

  hideProgressBar() {
    this.bar.nativeElement.style.height = "3px";
    for (var i = 0; i < this.progress.length; i++) {
      this.progress[i].style.opacity = 0;
    }
  }

  private renderCode() {
    this.markup = `
    <div id="module-name">
    <section *ngFor="let item of [].constructor(sectionLength); let i = index" [ngClass]="{ 'display-none': currentSection != i }">
        <div #sections>{{'Section ' + (i + 1)}}</div>

        (Injectable Content)
        // Section 1 Content
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

        // Section 2 Content
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

        // Section 3 Content
        <div *ngIf="currentSection === 2" class="section-content">
            Results...
        </div>

    </section>
    <div id="indicator" #bar></div>
    <div id="percent">
        <div *ngFor="let percent of [].constructor(sectionLength); let i = index">
            {{ Math.round((100 / sectionLength) * (i + 1)) + '%' }}
        </div>
    </div>
    <div class="btn-group" #btnGroup (mouseover)="showProgressBar()" (mouseout)="hideProgressBar()">
        <button *ngFor="let btn of [].constructor(sectionLength); let i = index" (click)="navigate(i)">
            {{ 'Section ' + (i + 1) }}
        </button>
    </div>
</div>`;

    this.style = `
    #module-name {
      height: 300px;
      border-radius: 6px;
      margin-top: 25px;
      position: relative;
      font-family: sans-serif;
      overflow: hidden;
  
      #indicator {
          background-color: grey-black;
          height: 3px;
          position: absolute;
          bottom: 0;
          transition: all 0.5s;
      }
  
      section {
          height: 100%;
          background-color: #ffffff;
          border: 1px solid grey-black;
          border-radius: 6px;
  
          >div {
              font-size: 1.5em;
              width: 100%;
              height: 100%;
              text-transform: uppercase;
              color: grey-black;
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
                      color: grey-black;
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
  
  .display-none {
      display: none;
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
          background-color: $oceanBlue;
          color: #ffffff;
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
  
      >div {
          width: 33.3%;
          text-align: center;
          color: yellow-gold;
          opacity: 0;
          transition: opacity 0.5s;
      }
  }`;

    this.typescript = `
    import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren, } from '@angular/core';
    
    @Component({
      selector: 'my-app',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
    })
    export class AppComponent {

      @ViewChildren('sections') sections: QueryList<ElementRef>;
      @ViewChild('btnGroup', { static: false }) btnGroup: ElementRef;
      @ViewChild('bar', { static: false }) bar: ElementRef;
    
      // SET TO ANY AMOUNT!
      sectionLength = 3;
    
      barLinkWidth = 0;
      currentSection = 0;
      progress: any = [];
      Math: any;
    
      constructor(private _cd: ChangeDetectorRef) {
        this.Math = Math;
      }
    
      ngAfterViewInit() {
        this._cd.detectChanges();
        this.progress = Array.prototype.slice.call(document.querySelectorAll('#percent > div'));
        this.barLinkWidth = 100 / this.sections.length;
        this.bar.nativeElement.setAttribute('style', 'width:' + this.barLinkWidth + '%');
        this.btnGroup.nativeElement.style.gridTemplateColumns = 'repeat(' + this.sectionLength + ', auto)';
      }
    
      navigate(sectionIndex: number) {
        this.currentSection = sectionIndex;
        this.bar.nativeElement.style.width = this.barLinkWidth * (sectionIndex + 1) + '%';
      }
    
      showProgressBar() {
        this.bar.nativeElement.style.height = '22px';
        for (var i = 0; i < this.progress.length; i++) {
          this.progress[i].style.opacity = 1;
        }
      }
    
      hideProgressBar() {
        this.bar.nativeElement.style.height = '3px';
        for (var i = 0; i < this.progress.length; i++) {
          this.progress[i].style.opacity = 0;
        }
      }
    }`;
  }
}
