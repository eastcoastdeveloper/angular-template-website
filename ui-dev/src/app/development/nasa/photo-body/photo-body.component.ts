import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { NasaSearchService } from "../nasa.service";

@Component({
  selector: "[nasa-photo-body]",
  templateUrl: "photo-body.component.html",
  styleUrls: ["photo-body.component.scss"],
})
export class NasaPhotoBodyComponent implements AfterViewInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  explanation: string = "";
  backgroundImage: string;
  videoURL: string;
  mediaType: null;
  datePickerStatus: boolean;
  searchQuery: any[] = [];

  fullExplanation: boolean = false;
  result: any[] = [];

  @Output() outputData = new EventEmitter();

  constructor(
    private _nasa: NasaSearchService,
    private _cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this._nasa.chosenMedia$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.explanation = currentVal.explanation;
        this.backgroundImage = currentVal.url;
        this.mediaType = currentVal.media_type;
        this.videoURL != null ? this.createURL(currentVal.url) : "";
        Object.keys(currentVal).length > 0 ? this.result.push(currentVal) : "";
      });

    this._nasa.dataPickerCurrentVal
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentVal) => {
        this.datePickerStatus = currentVal;
        this.shareData();
      });

    this._cd.detectChanges();
  }

  createURL(val: any) {
    this.videoURL = val;
    return this.videoURL;
  }

  loadHistoryItem(dataSet: any) {
    this.explanation = dataSet.explanation;
    this.backgroundImage = dataSet.url;
    // this.getUrl();
    this.mediaType = dataSet.media_type;
    // this.videoURL != null ? this.createURL(dataSet.url) : '';
  }

  getUrl() {
    return "url('" + this.backgroundImage + "')";
  }

  shareData() {
    this.outputData.emit(this.result);
  }

  closeCalendar() {
    this._nasa.changeDatePickerVal(false);
  }

  showText() {
    this.fullExplanation = !this.fullExplanation;
    this._nasa.changeDatePickerVal(false);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
