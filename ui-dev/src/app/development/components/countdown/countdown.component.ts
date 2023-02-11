import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, AfterViewInit {
  pageDataObject: PageDataObject = {
    title: 'Angular Countdown Timer',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-countdown-timer',
    repoLink:
      'https://github.com/eastcoastdeveloper/angular-countdown-timer-component',
    category: '',
    views: 14363,
    forks: 982,
    threeColumnLayout: true,
    cornerStone: false
  };

  projectDetails?: ProjectsListInterface;
  publishedOn?: string;
  updatedOn?: string;

  private date: any;
  private now: any;
  private targetDate: any = new Date(2023, 5, 11);
  private targetTime: any = this.targetDate.getTime();

  private difference: number;
  private months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  currentTime: any =
    this.months[this.targetDate.getMonth()] +
    ' ' +
    this.targetDate.getDate() +
    ', ' +
    this.targetDate.getFullYear();

  @ViewChild('days', { static: true }) days: ElementRef;
  @ViewChild('hours', { static: true }) hours: ElementRef;
  @ViewChild('minutes', { static: true }) minutes: ElementRef;
  @ViewChild('seconds', { static: true }) seconds: ElementRef;

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference))
        : (this.days.nativeElement.innerHTML = `<span class="days-loading">loading</span>`);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.now = this.date.getTime();
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }

  typescript: string = `date: any;
now: any;
targetDate: any = new Date(2022, 12, 1);
targetTime: any = this.targetDate.getTime();
difference: number;
months: Array<string> = ["January", "February", "March", "April",
"May", "June", "July", "August", "September", "October", "November", "December"];

// Template literals is ideal for this scenario
currentTime: any = this.months[this.targetDate.getMonth()] +
' ' + this.targetDate.getDate() + ', ' + this.targetDate.getFullYear();

@ViewChild("days", { static: true }) days: ElementRef;
  @ViewChild("hours", { static: true }) hours: ElementRef;
  @ViewChild("minutes", { static: true }) minutes: ElementRef;
  @ViewChild("seconds", { static: true }) seconds: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference))
        : (this.days.nativeElement.innerHTML = "<img src="https://i.gifer.com/VAyR.gif" />");
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }`;

  styling: string = `.count-down-timer {
  box-shadow: 2px 6px 9px 2px rgb(0 0 0 / 20%);
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 6px;
  padding: 10px;
    > p { margin: 5px 0 15px 0; }

  .wrapper {
    .description, .times {
      display: grid;
      grid-template-columns: repeat(4, calc(25% - 8px));
      grid-column-gap: 10px;
    }

    .description {
      > p { font: normal 14px sans-serif; }
    }

    .times {
      p {
        letter-spacing: -5px;
        font: normal 50px courier, sans-serif;
      }
    }
  }
}`;

  markup: string = `<div class="count-down-timer">
  <p>Countdown to {{currentTime}}</p>
  <div class="wrapper">
    <div class="description">
      <p>Days</p>
      <p>Hours</p>
      <p>Minutes</p>
      <p>Seconds</p>
    </div>
    <div class="times">
      <p #days></p>
      <p #hours></p>
      <p #minutes></p>
      <p #seconds></p>
    </div>
  </div>
</div>`;
}
