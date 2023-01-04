import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit, OnDestroy {
  windowWidth: number;
  private unsubscribe$ = new Subject<boolean>();
  pageDataObject: PageDataObject = {
    cornerStone: true,
    threeColumnLayout: false
  };

  constructor(
    private _windowWidth: WindowWidthService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });

    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
