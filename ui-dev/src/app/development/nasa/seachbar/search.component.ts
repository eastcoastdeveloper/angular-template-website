import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '../date-picker/date-picker.component';

@Component({
  selector: '[nasa-search]',
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class NasaSearchComponent {
  @ViewChild(CalendarComponent) calendarReference: CalendarComponent;
}