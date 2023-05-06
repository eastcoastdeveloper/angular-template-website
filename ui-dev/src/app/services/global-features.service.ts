import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { WindowRef } from '../windowRef';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeaturesService {
  someWidth: number = window.innerWidth;
  private winWidthSource = new BehaviorSubject(this.someWidth);
  currentWidth$ = this.winWidthSource.asObservable();
  categoryNavigationMenu$ = new BehaviorSubject<boolean>(false);
  historyIndex$ = new BehaviorSubject<number>(0);

  historyIndex: number = 0;
  history: string[] = [];
  pageQuery?: number;

  constructor(
    private _windowRef: WindowRef,
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

  externalLink(url: string) {
    window.open(url, '_blank');
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
