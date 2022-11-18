import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowWidthService {
  someWidth: number = window.innerWidth;

  private winWidthSource = new BehaviorSubject(this.someWidth);
  currentWidth$ = this.winWidthSource.asObservable();

  changeValue(newValue: number) {
    this.winWidthSource.next(newValue);
    return newValue;
  }
}
