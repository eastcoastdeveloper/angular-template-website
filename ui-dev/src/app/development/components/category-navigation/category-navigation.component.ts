import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss']
})
export class CategoryNavigationComponent implements OnInit, OnDestroy {
  windowWidth?: number;
  unsubscribe$: Subject<void> = new Subject<void>();
  constructor(private _windowWidth: WindowWidthService) {}

  ngOnInit(): void {
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
