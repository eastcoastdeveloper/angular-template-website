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
  // private currentUrlSource = new BehaviorSubject(this.currentUrl);

  currentVal$ = this.sideBarSource.asObservable();
  // urlVal$ = this.currentUrlSource.asObservable();

  changeValue(newValue: boolean) {
    this.sideBarSource.next(newValue);
    return newValue;
  }

  // changeRoute(newRoute: string) {
  //   this.currentUrlSource.next(newRoute);
  //   this.currentUrl = newRoute;
  //   return newRoute;
  // }
}
