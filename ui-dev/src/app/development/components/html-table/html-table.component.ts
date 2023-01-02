import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.scss']
})
export class HtmlTableComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'Table in HTML',
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
