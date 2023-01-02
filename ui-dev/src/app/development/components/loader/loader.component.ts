import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  template: `<div *ngIf="this._loaderService.getLoading()" class="circle">
    <div class="loader"></div>
  </div>`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(public _loaderService: LoaderService) {}
}
