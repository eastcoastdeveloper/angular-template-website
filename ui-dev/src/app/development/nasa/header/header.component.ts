import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { WindowWidthService } from "../../../services/window-width.service";
import { DataModel } from "../nasa.model";
import { NasaSearchService } from "../nasa.service";

@Component({
  selector: "nasa-pod-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.scss"],
})
export class NasaHeaderComponent implements AfterViewInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  windowWidth!: number;
  currentDate: any;
  months: any[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  year!: number;
  month!: number;
  day!: number;
  payload!: DataModel;
  title: string = "";
  fullDate: any = null;

  constructor(
    private _searchService: NasaSearchService,
    private _windowWidth: WindowWidthService,
    private _cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this._searchService.chosenDateValue$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.currentDate = currentVal;
        this.year = this.currentDate.year;
        this.month = this.currentDate.month;
        this.day = this.currentDate.day;
      });
    this._searchService.chosenMedia$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.payload = currentVal;
        this.title = this.payload.title;
      });
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
    this._cd.detectChanges();
  }

  loadHistoryItem(dataSet: any) {
    this.year = dataSet.date.slice(0, 4);
    this.month = dataSet.date.slice(5, 7);
    if (this.month < 10) {
      let str = String(this.month).slice(1);
      this.month = Number(str);
    }
    this.month = this.month - 1;
    this.day = dataSet.date.slice(8);
    this.fullDate = `${this.months[this.month]} ${this.day}, ${this.year}`;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
