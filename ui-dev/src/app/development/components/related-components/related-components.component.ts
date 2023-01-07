import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-related-components',
  templateUrl: './related-components.component.html',
  styleUrls: ['./related-components.component.scss']
})
export class RelatedComponentsComponent implements OnInit, OnDestroy {
  @Input() dataArray: ProjectsListInterface[] = [];
  unsubscribe$ = new Subject<boolean>();
  windowWidth?: number;

  constructor(private _windowWidth: WindowWidthService) {}

  ngOnInit(): void {
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
