import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  initVal: boolean = false;
  currentUrl: string = '';
  url: string = '';

  private sideBarSource = new BehaviorSubject(this.initVal);

  currentVal$ = this.sideBarSource.asObservable();

  changeValue(newValue: boolean) {
    this.sideBarSource.next(newValue);
    return newValue;
  }
}
