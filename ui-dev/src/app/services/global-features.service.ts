import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { WindowRef } from '../windowRef';
import { ProjectListService } from './project-list.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeaturesService {
  // Window Width
  someWidth: number = window.innerWidth;
  // someHeight: number = window.innerHeight;
  private winWidthSource = new BehaviorSubject(this.someWidth);
  // private winHeightSource = new BehaviorSubject(this.someWidth);
  currentWidth$ = this.winWidthSource.asObservable();
  // currentHeight$ = this.winHeightSource.asObservable();

  // Back Button Navigation
  backButtonActive: boolean = false;
  historyIndex: number = 0;
  history: string[] = [];
  pageQuery?: number;

  // currentType$ = new BehaviorSubject<string>('');

  constructor(private _windowRef: WindowRef, private _router: Router) {}

  // Change Window Width
  changeWidth(newValue: number) {
    this.winWidthSource.next(newValue);
    return newValue;
  }

  // Scroll to Top
  scrollToTop() {
    this._windowRef.nativeWindow.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // Back Button Navigation
  goBack() {
    console.log(this.history);
    if (this.historyIndex > 0) {
      this.backButtonActive = true;
      this.historyIndex--;
      let page_start_pos = this.history[this.historyIndex].lastIndexOf('=') + 1;
      if (page_start_pos !== 0) {
        this.pageQuery = 0;
        this.pageQuery = parseInt(
          this.history[this.historyIndex].slice(page_start_pos)
        );
        this._router.navigate([this.history[this.historyIndex]], {
          queryParams: { page: this.pageQuery }
        });
        this.history.pop();
        return;
      }
      if (page_start_pos === 0) {
        this._router.navigate([this.history[this.historyIndex]]);
        this.history.pop();
        return;
      }
    }
  }

  // Open External Link
  externalLink(url: string) {
    window.open(url, '_blank');
  }
}
