import { Component, Input } from '@angular/core';
import { ProjectsListInterface } from '../../../interfaces/projects-list.interface';

@Component({
  selector: 'app-projects-list-content',
  templateUrl: './projects-list-content.component.html',
  styleUrls: ['../../../styles/cornerstone.scss']
})
export class ProjectsListContentComponent {
  @Input() dataArray: ProjectsListInterface[] = [];
  @Input() pageHeader: string;

  OnInit() {}

  formatViews(val: number | bigint) {
    return new Intl.NumberFormat().format(val);
  }

  navigateToExternalURL(url: string) {
    window.location.href = url;
  }
}
