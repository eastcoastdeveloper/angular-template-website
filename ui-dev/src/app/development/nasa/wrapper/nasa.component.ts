import { Component, ViewChild } from "@angular/core";
import { NasaPhotoBodyComponent } from "../photo-body/photo-body.component";
import { NasaHeaderComponent } from "../header/header.component";
import { NasaSearchComponent } from "../seachbar/search.component";
import { NasaSearchService } from "../nasa.service";

@Component({
  selector: "app-nasa",
  templateUrl: "./nasa.component.html",
  styleUrls: ["./nasa.component.scss"],
})
export class NasaComponent {
  history!: any[];

  @ViewChild(NasaPhotoBodyComponent) photoBodyReference: NasaPhotoBodyComponent;
  @ViewChild(NasaHeaderComponent) headerReference: NasaHeaderComponent;
  @ViewChild(NasaSearchComponent) searchReference: NasaSearchComponent;

  constructor(private _nasaSearchService: NasaSearchService) {}

  externalClick() {
    this._nasaSearchService.changeDatePickerVal(false);
  }

  searchResults(e: any) {
    this.history = e;
  }

  loadDataSet(value: any) {
    this.photoBodyReference.loadHistoryItem(value);
    this.headerReference.loadHistoryItem(value);
    this.searchReference.calendarReference.currentDate = "";
    this.searchReference.calendarReference.getValue();
  }
}
