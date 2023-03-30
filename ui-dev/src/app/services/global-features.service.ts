import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { WindowRef } from '../windowRef';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeaturesService {
  someWidth: number = window.innerWidth;
  private winWidthSource = new BehaviorSubject(this.someWidth);
  currentWidth$ = this.winWidthSource.asObservable();

  backButtonMessage$ = new BehaviorSubject<boolean>(false);
  backButtonActive$ = new BehaviorSubject<boolean>(false);
  historyIndex$ = new BehaviorSubject<number>(0);
  historyIndex: number = 0;
  history: string[] = [];
  pageQuery?: number;

  constructor(
    private _windowRef: WindowRef,
    private _router: Router,
    private _metaService: Meta,
    private _title: Title
  ) {}

  changeWidth(newValue: number) {
    this.winWidthSource.next(newValue);
    return newValue;
  }

  scrollToTop() {
    this._windowRef.nativeWindow.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  goBack() {
    if (this.historyIndex > 0) {
      this.backButtonActive$.next(true);
      this.historyIndex--;
      const page_start_pos =
        this.history[this.historyIndex].lastIndexOf('=') + 1;
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
    this.historyIndex$.next(this.historyIndex);
  }

  externalLink(url: string) {
    window.open(url, '_blank');
  }

  showBackButtonMessage() {
    this.backButtonMessage$.next(true);
  }

  hideBackButtonMessage() {
    this.backButtonMessage$.next(false);
  }

  addTags(obj: {
    description: string;
    dateCreated: string;
    dateModified: string;
    keywords: string;
    title: string;
  }) {
    this._metaService.updateTag({
      name: 'description',
      content: obj.description!
    });
    this._metaService.updateTag({
      name: 'data.created',
      content: obj.dateCreated!
    });
    this._metaService.updateTag({
      name: 'data.created',
      content: obj.dateModified!
    });
    this._metaService.updateTag({
      name: 'keywords',
      content: obj.keywords!
    });
    this._title.setTitle(obj.title!);
  }
}
