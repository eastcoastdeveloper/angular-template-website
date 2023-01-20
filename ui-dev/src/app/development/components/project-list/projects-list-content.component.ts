import { AfterContentInit, Component, Input } from '@angular/core';
import { ProjectsListInterface } from '../../../interfaces/projects-list.interface';

@Component({
  selector: 'app-projects-list-content',
  templateUrl: './projects-list-content.component.html',
  styleUrls: ['../../../styles/cornerstone.scss']
})
export class ProjectsListContentComponent {
  @Input() dataArray: ProjectsListInterface[] = [];
  @Input() pageHeader: string;

  stackblitzLogo: string = '../../../assets/img/stackblitz_logo.png';
  stackblitzViews: string = '../../../assets/img/views-icon.jpg';
  forkIcon: string = '../../../assets/img/fork-icon.png';

  formatViews(val: number | bigint) {
    return new Intl.NumberFormat().format(val);
  }

  getImageUrl(i: number) {
    return this.dataArray[i].imgUrl;
  }

  navigateToExternalURL(url: string) {
    window.location.href = url;
  }
}
