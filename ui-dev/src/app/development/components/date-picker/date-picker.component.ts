import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: '[app-date-picker]',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  urlStackblitz: string =
    'https://stackblitz.com/edit/datepicker-angular-component?file=src%2Fapp%2Fdate-picker%2Fdate-picker.component.ts';
  pageDataObject: PageDataObject = {
    title: 'Angular Date Picker',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-date-picker',
    repoLink:
      'https://github.com/eastcoastdeveloper/datepicker-angular-component',
    category: '',
    views: 85,
    forks: 0,
    threeColumnLayout: true,
    cornerStone: false,
    meta: {
      description:
        'Custom Angular date picker. Easy to modify styling & features. Code is both clean & flexible. Use it in your project!',
      keywords:
        'datepicker angular, angular component, styled components typescript',
      title: 'Angular Date Picker',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };
  calendarVisible: boolean = false;
  private d: any = new Date();
  readonly weekdays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  readonly months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  years: number[] = [
    1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022
  ];
  year: any = this.d.getFullYear();
  monthIndex: any = this.d.getMonth();
  currentDay: any = this.d.getDate();
  monthsMenu: boolean = false;
  yearsMenu: boolean = false;
  selectedDate: number = 0;
  currentDate: any = 1;
  daySpan: any[] = [];
  private firstDay: any;
  private lastDay: any;

  markup: string;
  scss: string;
  typescript: string;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit() {
    this.firstLastDays();
    this.renderCode();
  }

  // Calculate First/ Last Days of the Month
  calculateStartEndDate(firstDayOfMonth: number, lastDayOfMonth: number) {
    this.daySpan = [];
    let dayIndex = 1,
      emptyCells = 0;
    for (let i = 0; i < 42; i++) {
      if (firstDayOfMonth > i) emptyCells++;
      this.daySpan.push({
        value:
          i >= firstDayOfMonth && i < emptyCells + lastDayOfMonth
            ? dayIndex++
            : null
      });
    }
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  onResize($event: any) {
    this.calendarVisible = false;
  }

  // Determine First/Last Days
  firstLastDays() {
    this.firstDay = new Date(this.year, this.monthIndex, 1);
    this.lastDay = new Date(this.year, this.monthIndex + 1, 0);
    this.calculateStartEndDate(this.firstDay.getDay(), this.lastDay.getDate());
  }

  // Select Year
  selectYear(i: number) {
    this.year = i;
    this.firstLastDays();
    this.checkForFutureDate(this.year, this.monthIndex, this.currentDay);
  }

  // Select Month
  selectMonth(i: number) {
    this.monthIndex = i;
    this.firstLastDays();
    this.checkForFutureDate(this.year, this.monthIndex + 1, this.currentDay);
  }

  // Select Day
  selectDay(i: number) {
    this.currentDay = i;
    this.currentDay = this.currentDay.value;
    this.checkForFutureDate(this.year, this.monthIndex, this.currentDay);
  }

  openCalendar() {
    this.calendarVisible = true;
  }

  closeCalendar() {
    this.calendarVisible = false;
  }

  showMonths() {
    this.monthsMenu = !this.monthsMenu;
    this.yearsMenu = false;
  }

  showYears() {
    this.yearsMenu = !this.yearsMenu;
    this.monthsMenu = false;
  }

  checkForFutureDate(y: number, m: number, d: number) {
    this.selectedDate = new Date(y, m, d).getTime();
    this.currentDate = new Date().getTime();
  }

  getValue() {
    let returnValue!: string;
    if (this.currentDate === '') {
      returnValue = 'Calendar Inactive';
    }
    if (this.currentDate > this.selectedDate) {
      returnValue =
        this.months[this.monthIndex] + ' ' + this.currentDay + ', ' + this.year;
    }
    if (this.currentDate < this.selectedDate) {
      returnValue = 'Future Date';
    }
    return returnValue;
  }

  private renderCode() {
    this.markup = `<div id="calendar-component">
  <input
    type="text" placeholder="Select a date..."
    (focus)="openCalendar()"
    [ngClass]="{ 'future-date': selectedDate > currentDate }"
    value="{{this.months[this.monthIndex] + ' ' + this.currentDay + ', ' + this.year}}"
  />
  <div *ngIf="calendarVisible" class="calendar">
    <nav>
      <div class="close-calendar" (click)="closeCalendar()">
        <span>&#x2715;</span>
      </div>
      <div class="month" (click)="showMonths()">
        <span>{{ months[monthIndex] }}</span>
        <ul *ngIf="monthsMenu">
          <li
            *ngFor="let month of months;
            let i = index"
            (click)="selectMonth(i)">{{ month }}</li>
        </ul>
      </div>
      <div class="year" (click)="showYears()">
        <span>{{ year }}</span>
        <ul *ngIf="yearsMenu">
          <li
            *ngFor="let year of years;
            let i = index"
            (click)="selectYear(year)">{{ year }}</li>
        </ul>
      </div>
    </nav>
    <div class="weekdays">
      <ul>
        <li
          *ngFor="let day of weekdays">{{ day }}</li>
      </ul>
    </div>
    <div class="all-days-skeleton">
      <div
        *ngFor="let day of daySpan;
        let i = index" (click)="selectDay(day)"
        [ngClass]="{'has-value': day.value != null,'current-date': day.value === currentDay}">
          <div class="day-value">{{ day.value }}</div>
      </div>
    </div>
  </div>
</div>`;

    this.scss = `#calendar-component {
  position: relative;
  max-width: 250px;
  margin: 0 auto;

  input {
    font: normal 15px sans-serif;
    border: 1px solid #313b3f;
    outline: none;
    padding: 8px;
    border-radius: 5px;
    width: 100%;
    color: #313b3f;
    box-sizing: border-box;
  }

  .calendar {
    box-shadow: 2px 5px 6px 2px rgba(0, 0, 0, 0.2);
    width: 250px;
    padding-bottom: 15px;
    border: 1px solid #313b3f;
    background-color: white;
    position: absolute;
    right: 0;
    top: 40px;
    border-radius: 4px;
    z-index: 1;

    .all-days-skeleton {
      display: flex;
      flex-wrap: wrap;
      margin-top: 5px;
      justify-content: center;
      font: normal 14px sans-serif;

      > div {
        width: 31px;
        height: 25px;
        display: flex;
        border: 1px solid transparent;
        cursor: pointer;

        .day-value {margin: auto;}
      }
    }
  }

  nav {
    font: normal 15px sans-serif;
    display: grid;
    background-color: #313b3f;
    color: white;
    padding: 5px 0 6px 0;
    grid-template-columns: repeat(2, 30px);
    grid-column-gap: 5px;
    position: relative;
    justify-content: center;

    .close-calendar {
      background-color: white;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5px;
      color: black;
      border-radius: 4px;
      display: flex;
      cursor: pointer;

      span {margin: auto;}
    }

    .search {
      position: absolute;
      background-color: white;
      border-radius: 3px;
      padding: 4px 4px 4px 4px;
      cursor: pointer;
      right: 20px;
      top: 3px;
      color: #313b3f;
      text-transform: uppercase;
      font: bold 11px sans-serif;
    }

    .month, .year {
      ul {
        display: grid;
        grid-template-columns: repeat(3, 33.3%);
        grid-row-gap: 2px;
        grid-column-gap: 1px;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: #457b9d;
        padding: 5px;
        top: 28px;
        left: 0;
        list-style-type: none;
        width: 240px;
        text-align: center;
        z-index: 1;
        overflow-y: auto;
        height: 200px;

        li {
          cursor: pointer;
          transition: background-color 0.25s;
          padding: 8px;
          box-sizing: border-box;
          border-radius: 4px;

          &:hover {
            background-color: #03658c;
          }
        }
      }
    }
    .month, .year {cursor: pointer;}
  }

  .weekdays {
    margin-top: 10px;

    ul {
      display: grid;
      grid-template-columns: repeat(7, auto);
      justify-content: center;
      padding: 0;
      grid-column-gap: 13px;
      transform: translateX(-2px);

      li {
        list-style-type: none;
        font: bold 14px sans-serif;
        padding: 0 5px;
      }
    }
  }
}
.has-value:hover, .current-date {
  background-color: #03658c;
  border-radius: 4px;
  color: white;
  transform: scale(0.9);
}

.future-date {
  background-color: rgb(204, 51, 0);
  color: white !important;
}`;

    this.typescript = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-calendar]',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  calendarVisible: boolean = false;
  d: any = new Date();
  weekdays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  months: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  years: number[] = [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
                  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  
  currentDay: any = this.d.getDate();
  monthIndex: any = this.d.getMonth();
  year: any = this.d.getFullYear();
  firstDay: any;
  lastDay: any;
  monthsMenu: boolean = false;
  yearsMenu: boolean = false;
  daySpan: any[] = [];
  selectedDate: number;
  currentDate: number;

  ngOnInit() { this.firstLastDays(); }

  // Calculate First/ Last Days of the Month
  calculateStartEndDate(firstDayOfMonth: number, lastDayOfMonth: number) {
    this.daySpan = [];
    let dayIndex = 1,
        emptyCells = 0;
    
    for (let i = 0; i < 42; i++) {
      if (firstDayOfMonth > i) emptyCells++;
      this.daySpan.push(
        {value: i >= firstDayOfMonth && i < emptyCells + lastDayOfMonth ? dayIndex++ : null}
      );
    }
  }

  // Determine First/Last Days
  firstLastDays() {
    this.firstDay = new Date(this.year, this.monthIndex, 1);
    this.lastDay = new Date(this.year, this.monthIndex + 1, 0);
    this.calculateStartEndDate(this.firstDay.getDay(), this.lastDay.getDate());
  }

  // Select Year
  selectYear(i: number) {
    this.year = i;
    this.firstLastDays();
    this.checkForFutureDate(this.year, this.monthIndex, this.currentDay);
  }

  // Select Month
  selectMonth(i: number) {
    this.monthIndex = i;
    this.firstLastDays();
    this.checkForFutureDate(this.year, this.monthIndex + 1, this.currentDay);
  }

  // Select Day
  selectDay(i: number) {
    this.currentDay = i;
    this.currentDay = this.currentDay.value;
    this.checkForFutureDate(this.year, this.monthIndex, this.currentDay);
  }

  openCalendar() {
    this.calendarVisible = true;
  }

  closeCalendar() {
    this.calendarVisible = false;
  }

  showMonths() {
    this.monthsMenu = !this.monthsMenu;
    this.yearsMenu = false;
  }

  showYears() {
    this.yearsMenu = !this.yearsMenu;
    this.monthsMenu = false;
  }

  checkForFutureDate(y: number, m: number, d: number) {
    this.selectedDate = new Date(y, m, d).getTime();
    this.currentDate = new Date().getTime();
    this.currentDate > this.selectedDate ? '' : console.log('...future date');
  }
}`;
  }
}
