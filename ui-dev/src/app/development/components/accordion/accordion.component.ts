import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccordionComponentInterface } from 'src/app/interfaces/accordion.interface';
import { Meta, Title } from '@angular/platform-browser';
import { ProjectListService } from 'src/app/services/project-list.service';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @ViewChild('accordionParent', { static: false }) accordionParent: ElementRef;
  urlStackblitz: string =
    'https://stackblitz.com/edit/angular-accordion-json?file=src%2Fapp%2Fapp.component.ts';
  pageDataObject: PageDataObject = {
    title: 'Angular Accordion',
    publishedOn: 'Sept 29, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-accordion',
    repoLink: 'https://github.com/eastcoastdeveloper/Angular-Accordion-JSON',
    category: '',
    views: 821,
    forks: 20,
    threeColumnLayout: true,
    cornerStone: false,
    meta: {
      description:
        'Working example of an Angular accordion with all the HTML5, SCSS, and TypeScript needed to get you up and running.',
      keywords: 'angular component, website features, ui components',
      title: 'Angular Accordion',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  accordionData: AccordionComponentInterface[] = [
    {
      name: 'Experience',
      content: [
        {
          item: 'UI Development'
        },
        {
          item: 'Frontend Development'
        },
        {
          item: 'Angular 2+'
        },
        {
          item: 'React'
        },
        {
          item: 'AngularJS'
        },
        {
          item: 'HTML5, CSS, JS & JSON'
        },
        {
          item: 'Data Driven Development'
        },
        {
          item: 'Manage Small Teams'
        },
        {
          item: 'Planning & Deadlines'
        },
        {
          item: 'Jira & Git'
        },
        {
          item: 'ChartJS & D3'
        },
        {
          item: "Wordpress & Custom CMS's"
        },
        {
          item: 'Custom Data Structures'
        },
        {
          item: 'Backend Integration w/ Endpoints'
        },
        {
          item: 'Company Branding'
        },
        {
          item: 'Rich Media & Advertising'
        },
        {
          item: 'Client Facing Experience'
        }
      ]
    },
    {
      name: 'Skills',
      content: [
        {
          title: 'HTML5'
        },
        {
          title: 'CSS'
        },
        {
          title: 'Sass'
        },
        {
          title: 'JavaScript'
        },
        {
          title: 'TypeScript'
        },
        {
          title: 'AngularJS'
        },
        {
          title: 'Angular 7-10'
        },
        {
          title: 'JSON'
        },
        {
          title: 'Wordpress'
        },
        {
          title: 'Photoshop'
        },
        {
          title: 'Illustrator'
        },
        {
          title: 'After Effects'
        }
      ]
    },
    {
      name: 'Codepens',
      content: [
        {
          title: 'HTML5 Video Player',
          code: 'https://codepen.io/eastcoastdeveloper/pen/LmxqKa',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/LmxqKa'
        },
        {
          title: 'JavaScript Tabs',
          code: 'https://codepen.io/eastcoastdeveloper/pen/yzejjQ',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/yzejjQ'
        },
        {
          title: 'Responsive Carousel',
          code: 'https://codepen.io/eastcoastdeveloper/pen/WyxvbP',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/WyxvbP'
        },
        {
          title: '3D Animation',
          code: 'https://codepen.io/eastcoastdeveloper/pen/jGYXYy',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/jGYXYy'
        },
        {
          title: 'Banner w/ Date Code',
          code: 'https://codepen.io/eastcoastdeveloper/pen/RLLmZL',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/RLLmZL'
        },
        {
          title: 'jQuery User Selection',
          code: 'https://codepen.io/eastcoastdeveloper/pen/ZXYLyV',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/ZXYLyV'
        },
        {
          title: 'Open Weather Map',
          code: 'https://codepen.io/eastcoastdeveloper/pen/aVJQVJ',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/aVJQVJ'
        },
        {
          title: 'In Page Navigation',
          code: 'https://codepen.io/eastcoastdeveloper/pen/JjogojN',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/JjogojN'
        },
        {
          title: 'In Page Navigation',
          code: 'https://codepen.io/eastcoastdeveloper/pen/JjogojN',
          viewProject: 'https://codepen.io/eastcoastdeveloper/live/JjogojN'
        },
        {
          title: 'D3 Bar Chart',
          code: 'https://codepen.io/eastcoastdeveloper/pen/MWbwPzm',
          viewProject: 'https://codepen.io/eastcoastdeveloper/full/MWbwPzm'
        }
      ]
    },
    {
      name: 'Codepen Projects',
      content: [
        {
          title: 'AngularJS SPA',
          code: 'https://codepen.io/eastcoastdeveloper/project/editor/ZgbdLb',
          viewProject:
            'https://codepen.io/eastcoastdeveloper/project/full/ZgbdLb'
        }
      ]
    },
    {
      name: 'Stackblitz',
      content: [
        {
          title: 'Drag & Drop UI',
          code: 'https://stackblitz.com/edit/drag-and-drop-javascript',
          viewProject: 'https://drag-and-drop-javascript.stackblitz.io/'
        },
        {
          title: 'Banner Template',
          code: 'https://stackblitz.com/edit/banner-template',
          viewProject: 'https://banner-template.stackblitz.io/'
        },
        {
          title: 'Accordion',
          code: 'https://stackblitz.com/edit/angular-accordion-json',
          viewProject: 'https://angular-accordion-json.stackblitz.io/'
        },
        {
          title: 'D3 Chart',
          code: 'https://stackblitz.com/edit/d3-bar-chart',
          viewProject: 'https://d3-bar-chart.stackblitz.io/'
        },
        {
          title: 'Doughnut Chart w/ Countdown',
          code: 'https://stackblitz.com/edit/doughnut-chart-component',
          viewProject: 'https://doughnut-chart-component.stackblitz.io/'
        },
        {
          title: 'Rest Countries',
          code: 'https://stackblitz.com/edit/rest-countries-leaflet-map',
          viewProject: 'https://rest-countries-leaflet-map.stackblitz.io/'
        },
        {
          title: 'Custom Line Chart',
          code: 'https://stackblitz.com/edit/chart-with-js',
          viewProject: 'https://chart-with-js.stackblitz.io/'
        },
        {
          title: 'Slider',
          code: 'https://stackblitz.com/edit/angular-8-table-pagination',
          viewProject: 'https://angular-8-table-pagination.stackblitz.io/'
        }
      ]
    },
    {
      name: 'Posts',
      content: [
        {
          title: 'UX Design All Star Tips',
          link: 'https://codepen.io/eastcoastdeveloper/post/ux-design-description-gotchas-all-star-tips'
        }
      ]
    }
  ];

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  // Toggle Accordion
  toggleSection(e: any, i: number) {
    var allGroups: any[] = [];
    allGroups =
      this.accordionParent.nativeElement.getElementsByClassName(
        'hidden-content'
      );
    for (var j = 0; j < allGroups.length; j++) {
      if (
        i === j &&
        !e.target.parentElement
          .querySelector('.hidden-content')
          .classList.contains('show-content')
      ) {
        e.target.parentElement
          .querySelector('.hidden-content')
          .classList.add('show-content');
      } else {
        allGroups[j].classList.remove('show-content');
      }
    }
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  json: string = `[
  { "name": "Experience",
    "content": [
      { "item": "UI Development"                },
      { "item": "Frontend Development"      },
      { "item": "Single Page Apps"             },
      { "item": "HTML5, CSS, JS & JSON"   },
      { "item": "Data Driven Development"  },
      { "item": "Manage Small Teams"         }
    ]},
  { "name": "Skills",
    "content": [
      { "title": "HTML5"         },
      { "title": "CSS"           },
      { "title": "Sass"          },
      { "title": "JavaScript"    },
      { "title": "TypeScript"    },
      { "title": "Angular"       },
      { "title": "JSON"          },
      { "title": "Spring"        },
      { "title": "Express        },
      { "title": "Wordpress"     },
      { "title": "Photoshop"     }
    ]},
  { "name": "Codepens",
    "content": [
      { "title": "HTML5 Video Player",
        "code": "https://codepen.io/eastcoastdeveloper/pen/LmxqKa",
        "viewProject": "https://codepen.io/eastcoastdeveloper/full/LmxqKa" },
      { "title": "Progress Navigation",
        "code": "https://codepen.io/eastcoastdeveloper/pen/xXOapm",
        "viewProject": "https://codepen.io/eastcoastdeveloper/full/xXOapm" },
      { "title": "JavaScript Tabs",
        "code": "https://codepen.io/eastcoastdeveloper/pen/yzejjQ",
        "viewProject": "https://codepen.io/eastcoastdeveloper/full/yzejjQ" },
      { "title": "Responsive Carousel",
        "code": "https://codepen.io/eastcoastdeveloper/pen/WyxvbP",
        "viewProject": "https://codepen.io/eastcoastdeveloper/full/WyxvbP" }
    ]
  },
  { "name": "Codepen Projects",
    "content": [
      { "title": "AngularJS SPA",
        "code": "https://codepen.io/eastcoastdeveloper/project/editor/ZgbdLb",
        "viewProject": "https://codepen.io/eastcoastdeveloper/project/full/ZgbdLb" },
      { "title": "Web Banner Template",
        "code": "https://codepen.io/eastcoastdeveloper/project/editor/XYyQaL",
        "viewProject": "https://codepen.io/eastcoastdeveloper/project/full/XYyQaLL" }
    ]
  },
  { "name": "Stackblitz",
    "content": [
      { "title": "Drag & Drop UI",
        "code": "https://stackblitz.com/edit/drag-and-drop-javascript",
        "viewProject": "https://drag-and-drop-javascript.stackblitz.io/" },
      { "title": "Banner Template",
        "code": "https://stackblitz.com/edit/banner-template",
        "viewProject": "https://banner-template.stackblitz.io/" },
      { "title": "Mock UI w/ JSON Charts",
        "code": "https://stackblitz.com/edit/chart-js-examples",
        "viewProject": "https://chart-js-examples.stackblitz.io/" },
      { "title": "Accordion",
        "code": "https://stackblitz.com/edit/angular-accordion-json",
        "viewProject": "https://angular-accordion-json.stackblitz.io/" }
    ]
  },
  { "name": "Posts",
    "content": [
      { "title": "UX Design All Star Tips",
        "link": "https://codepen.io/eastcoastdeveloper/post/ux-design-description-gotchas-all-star-tips" }
    ]}
]`;

  typescript: string = `import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccordionData } from './accordion.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  accordionData: AccordionData[] = [];
  @ViewChild('accordionParent', { static: false }) accordionParent: ElementRef;
  constructor(private _http: HttpClient) {}

  // Get the data, set the interface (obj properties).
  // pipe() holds functions that will be sequentially executed.
  // subscribe w/ next, error, and complete methods
  ngOnInit(): void {
    this._http
      .get<AccordionData[]>('path-to-json')
      .pipe(take(1))
      .subscribe({
        next: (val) => {
          this.accordionData = val;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('finished');
        },
      });
  }

  // Toggle Accordion
  toggleSection(e: any, index: number) {
    var allGroups = [];
    allGroups =
      this.accordionParent.nativeElement.getElementsByClassName(
        'hidden-content'
      );
    for (var j = 0; j < allGroups.length; j++) {
      if ( index === j && !e.target.parentElement
          .querySelector('.hidden-content')
          .classList.contains('show-content')
      ) {
        e.target.parentElement
          .querySelector('.hidden-content')
          .classList.add('show-content');
      } else {
        allGroups[j].classList.remove('show-content');
      }
    }
  }
}`;

  interface: string = `export interface AccordionData {
    content: {
      item?: string;
      title?: string;
      code?: string;
      viewProject?: string;
      link?: string;
    }[];
    name: string;
}`;

  scss: string = `$black: #313b3f;
$blue: #25aae1;
$white: #eff3f6;
$yellow: #d9a74a;

.accordion-wrapper {
  margin: 30px auto 0 auto;
  border-radius: 5px;
  overflow: hidden;
  max-width: 300px;
  .data-block:nth-child(2) {
    border-bottom: 1px solid $white;
  }
}

.data-block {
  font: normal 14px sans-serif;
  cursor: pointer;
  position: relative;
  p {
    background-color: $black;
    color: $yellow;
    margin: 0;
    padding: 10px 0 10px 10px;
  }
  .count {
    position: absolute;
    top: 0;
    right: 15px;
  }
  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0;
    line-height: 25px;
    li {
      display: grid;
      padding: 5px 10px 5px 30px;
      grid-template-areas: 'title title' 'code project';
      .title {
        color: $blue;
        grid-area: title;
      }
      .code-link {
        a { grid-area: code; }
      }
      .project-link {
        a { grid-area: project; }
      }
      div:not(:first-child) { font-style: italic; }
    }
    li:nth-child(even) { background-color: rgba(49, 59, 63, 0.8); }
    li:nth-child(odd)  { background-color: rgba(49, 59, 63, 0.9); }
    li:hover {
      background-color: $black;
    }

    a {
      color: $white;
      text-decoration: none;
      transition: color 0.3s;
    }
    a:hover { color: $yellow; }
  }
}
.hidden-content {
  overflow: auto;
  max-height: 0;
  color: $white;
}
.show-content {
  max-height: 250px !important;
}
#skills {
  list-style-type: unset;
  background-color: $black;
  display: grid;
  grid-template-columns: 50% 50%;
  line-height: 20px;
  padding: 20px 0 10px 30px;
  li {
    display: block;
    padding: 5px 10px 5px 0;
  }
}
.borderBottom {
  border-bottom: 1px solid $white;
  position: absolute;
  top: 36px;
  width: 100%;
  z-index: 1;
}`;

  markup: string = `<div #accordionParent class="accordion-wrapper">
  <div class="data-block" *ngFor="let item of accordionData; let i = index">
    <p (click)="toggleSection($event, i)">{{ item.name }}</p>
    <p class="count">{{ item.content.length }}</p>
    <div class="borderBottom"></div>
    <div class="hidden-content">
      <ul *ngIf="i === 0">
        <li *ngFor="let posts of item.content; let j = index">
          <div class="title">{{ posts.item }}</div>
        </li>
      </ul>
      <ul id="skills" *ngIf="i === 1">
        <li *ngFor="let listElems of item.content; let j = index">
          <div class="title">{{ listElems.title }}</div>
        </li>
      </ul>
      <ul *ngIf="i === 2 || i === 3 || i === 4">
        <li *ngFor="let listElems of item.content; let j = index">
          <div class="title">{{ listElems.title }}</div>
          <div class="code-link">
            <a href="{{ listElems.code }}" target="_blank">code</a>
          </div>
          <div class="project-link">
            <a href="{{ listElems.viewProject }}" target="_blank">view project</a>
          </div>
        </li>
      </ul>
      <ul *ngIf="i === 5">
        <li *ngFor="let posts of item.content; let j = index">
          <div class="title">{{ posts.title }}</div>
          <div class="code-link">
            <a href="{{ posts.link }}" target="_blank">Read the post</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>`;
}
