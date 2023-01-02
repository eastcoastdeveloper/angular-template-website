import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-d3-bar-graph',
  templateUrl: './d3-bar-graph.component.html',
  styleUrls: ['./d3-bar-graph.component.scss']
})
export class D3BarGraphComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'D3 Bar Graph',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 3, 2023',
    repoTitle: 'angular-date-picker',
    repoLink:
      'https://github.com/eastcoastdeveloper/datepicker-angular-component',
    category: '',
    views: 28,
    forks: 0
  };

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
  }
}
