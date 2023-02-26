import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowWidthService {
  someWidth: number = window.innerWidth;
  someHeight: number = window.innerHeight;

  private winWidthSource = new BehaviorSubject(this.someWidth);
  private winHeightSource = new BehaviorSubject(this.someWidth);

  currentWidth$ = this.winWidthSource.asObservable();
  currentHeight$ = this.winHeightSource.asObservable();

  changeWidth(newValue: number) {
    this.winWidthSource.next(newValue);
    return newValue;
  }

  changeHeight(newValue: number) {
    this.winHeightSource.next(newValue);
    return newValue;
  }
}
