import { Component, Input } from '@angular/core';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { ScrollToTopService } from 'src/app/services/scroll-to-top.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalPages: number;

  projectsArray: ProjectsListInterface[] = [];

  constructor(
    private _projectListService: ProjectListService,
    private _scrollUp: ScrollToTopService
  ) {}

  // Check Cache ...
  getEndpointData(page: number, limit: number) {
    this._projectListService.isThereCache(page, limit);
    this._scrollUp.scrollToTop();
  }
}
