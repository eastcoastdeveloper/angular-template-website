import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { WindowRef } from '../windowRef';
import { CategoryInterface } from '../interfaces/categories.interface';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';
import { ProjectListService } from './project-list.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeaturesService {
  someWidth: number = window.innerWidth;
  private unsubscribe$ = new Subject<void>();
  private winWidthSource = new BehaviorSubject(this.someWidth);
  currentWidth$ = this.winWidthSource.asObservable();
  categoryNavigationMenu$ = new BehaviorSubject<boolean>(false);
  categoryType: string;

  constructor(
    private _windowRef: WindowRef,
    private _configService: ConfigService,
    private _projectListService: ProjectListService,
    private _router: Router
  ) {}

  changeWidth(newValue: number) {
    this.winWidthSource.next(newValue);
    return newValue;
  }

  getCategoryFromUrl() {
    let categoryList: CategoryInterface;
    const url = this._router.url;
    let list: string[] = [];
    let index = 0;
    this._configService.categoryConfig$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        categoryList = categories;
        list = Object.values(categoryList);
        for (; index < list.length; index++) {
          const categorySearch = url.search(list[index]);
          if (categorySearch > 0) {
            this.categoryType = list[index];
            this._projectListService.categoryType$.next(this.categoryType);
            this._projectListService.isThereCache(this.categoryType, 1, 10);
            break;
          }
        }
      });
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
}
