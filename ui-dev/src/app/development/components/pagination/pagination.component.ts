import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  private unsubscribe$ = new Subject<boolean>();
  @Input() categoryProp: string;
  totalPages: number[] = [];
  totalPagesProp: number;

  projectsArray: ProjectsListInterface[] = [];

  constructor(
    private _projectListService: ProjectListService,
    private _scrollUp: GlobalFeaturesService
  ) {}

  ngOnInit() {
    this._projectListService.totalItems$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.totalPages = [];
        this.totalPagesProp = value;
        for (var i = 0; i < this.totalPagesProp; i++) {
          this.totalPages.push(i + 1);
        }
      });
  }

  // Check Cache ...
  getEndpointData(page: number, limit: number) {
    this._projectListService.isThereCache(this.categoryProp, page, limit);
    this._scrollUp.scrollToTop();
  }
}
