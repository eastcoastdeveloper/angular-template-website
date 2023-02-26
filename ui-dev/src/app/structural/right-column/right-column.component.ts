import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CodeSamplesInterface } from 'src/app/interfaces/code-samples.interface';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements AfterViewChecked {
  @ViewChild('accordionParent') accordionParent!: ElementRef;
  private unsubscribe$ = new Subject<boolean>();
  threeColumnLayout?: boolean;
  cornerStone?: boolean;
  windowWidth?: number;
  accordionData: CodeSamplesInterface[] = [
    {
      title: 'Angular Countdown Timer Component',
      code: 'https://stackblitz.com/edit/angular-countdown-timer-component?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Angular Table Pagination',
      code: 'https://stackblitz.com/edit/angular-table-pagination-json?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Dynamic Sidebar',
      code: 'https://stackblitz.com/edit/angular-dynamic-sidebar?file=src%2Fapp%2Fsidebar%2Fsidebar.component.ts'
    },
    {
      title: 'Angular Resolver',
      code: 'https://stackblitz.com/edit/angular-resolver-mock?file=src%2Fapp%2Fdata.service.ts'
    },
    {
      title: 'Doughnut Chart UI',
      code: 'https://stackblitz.com/edit/doughnut-chart-component?file=src%2Fapp%2Fdoughnut-chart%2Fdoughnut-chart.component.ts'
    },
    {
      title: 'Multiline Chart',
      code: 'https://stackblitz.com/edit/chartjs-multi-line-chart?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Angular ChartJS Area Chart',
      code: 'https://stackblitz.com/edit/angular-8-area-chart?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Angular ChartJS Bar Chart UI',
      code: 'https://stackblitz.com/edit/chartjs-bar-chart?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Angular Nested Routing',
      code: 'https://stackblitz.com/edit/angular-8-nested-routing?file=src%2Fapp%2Fapp-routing.module.ts'
    },
    {
      title: 'Angular Routing Between Modules',
      code: 'https://stackblitz.com/edit/angular-routing-between-modules?file=src%2Fapp%2Fapp-routing.module.ts'
    },
    {
      title: 'ChartJS Line Chart',
      code: 'https://stackblitz.com/edit/chart-with-js?file=src%2Fapp%2Fline-chart%2Fline-chart.component.ts'
    },
    {
      title: 'Angular Slider',
      code: 'https://stackblitz.com/edit/angular-slider-json?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Angular Dropdown',
      code: 'https://stackblitz.com/edit/angular-dropdown-menu-component?file=src%2Fapp%2Fdirective.ts'
    },
    {
      title: 'Window Width',
      code: 'https://stackblitz.com/edit/angular-8-window-width?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'REST Countries',
      code: 'https://stackblitz.com/edit/rest-countries-leaflet-map?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'D3 Bar Chart',
      code: 'https://stackblitz.com/edit/d3-bar-chart?file=script.js'
    },
    {
      title: 'Progress Bar',
      code: 'https://stackblitz.com/edit/progress-bar-nav?file=script.js'
    },
    {
      title: 'Weather App',
      code: 'https://stackblitz.com/edit/angular-weather-component?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Profile Panel',
      code: 'https://stackblitz.com/edit/angular-profile-panel-toggle?file=src%2Fapp%2Fprofile-panel%2Fprofile-panel.component.ts'
    },
    {
      title: 'JavaScript Drag & Drop',
      code: 'https://stackblitz.com/edit/drag-and-drop-javascript?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'React List App',
      code: 'https://stackblitz.com/edit/react-list-item-app?file=src%2FApp.js'
    },
    {
      title: 'In Page Navigation',
      code: 'https://stackblitz.com/edit/in-page-navigation?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Event Emitter',
      code: 'https://stackblitz.com/edit/angular-eventemitter-example?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'React Hackernews App',
      code: 'https://stackblitz.com/edit/react-http-get?file=Content.tsx'
    },
    {
      title: 'Media Querie',
      code: 'https://stackblitz.com/edit/angular-8-media-querie?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'JavaScript Table',
      code: 'https://stackblitz.com/edit/table-in-html?file=index.js'
    },
    {
      title: 'Background Image',
      code: 'https://stackblitz.com/edit/html-background-image?file=index.html'
    },
    {
      title: 'Services in Angular',
      code: 'https://stackblitz.com/edit/services-in-angular?file=src%2Fapp%2Fservices%2Fwindow-width.service.ts'
    },
    {
      title: 'Angular Tabs',
      code: 'https://stackblitz.com/edit/typescript-tabs-example?file=src%2Fapp%2Fapp.component.ts'
    },
    {
      title: 'Angular Calculator',
      code: 'https://stackblitz.com/edit/angular-calculator-component?file=src%2Fmain.ts'
    }
  ];

  stackblitz: string = '../../../assets/img/logo_stackblitz.png';
  flickr: string = '../../../assets/img/logo_flickr.png';
  git: string = '../../../assets/img/logo_git.png';
  codepen: string = '../../../assets/img/logo_codepen.png';
  instagram: string = '../../../assets/img/logo_instagram.png';
  fredrickJaxx: string = '../../../assets/img/logo_FJ.png';

  constructor(private _windowWidthService: WindowWidthService) {}

  ngAfterViewChecked(): void {
    this._windowWidthService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }
}
