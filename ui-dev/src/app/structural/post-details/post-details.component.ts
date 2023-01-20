import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-post-details',
  styleUrls: ['./post-details.component.scss'],
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  projectListArray: ProjectsListInterface[] = [];
  private unsubscribe$ = new Subject<boolean>();
  windowWidth: number;
  publishedOn?: string;
  updatedOn?: string;
  repoLink?: string;
  repoTitle?: string;
  views: number;
  forks?: number;

  constructor(
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    this._projectListService.pageDataObjectSubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.publishedOn = val?.publishedOn;
        // this.pageTitle = val.pageTitle;
        this.updatedOn = val?.updatedOn;
        this.repoTitle = val?.repoTitle;
        this.repoLink = val?.repoLink;
        this.views = val?.views!;
        this.forks = val?.forks;
      });

    this._windowWidthService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }

  formatViews(val: number | bigint) {
    return new Intl.NumberFormat().format(val);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
