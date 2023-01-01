import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit, OnDestroy {
  windowWidth: number;
  private unsubscribe$ = new Subject<boolean>();

  constructor(private _windowWidth: WindowWidthService) {}

  ngOnInit(): void {
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
