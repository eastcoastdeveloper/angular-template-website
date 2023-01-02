import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CodeSamplesInterface } from 'src/app/interfaces/code-samples.interface';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements OnInit {
  accordionData: CodeSamplesInterface[] = [];

  @ViewChild('accordionParent') accordionParent!: ElementRef;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    // Only Call if Not Cached
    this._http
      .get<CodeSamplesInterface[]>('/api/code-samples')
      .subscribe((res) => {
        this.accordionData = res;
      });
  }
}
