import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AccordionComponentInterface } from "../../interfaces/accordion.interface";

@Component({
  selector: "app-right-column",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
  accordionData: AccordionComponentInterface[] = [];

  @ViewChild("accordionParent") accordionParent!: ElementRef;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get<AccordionComponentInterface[]>("assets/json/accordion.json")
      .subscribe((res) => {
        this.accordionData = res;
      });
  }
}
