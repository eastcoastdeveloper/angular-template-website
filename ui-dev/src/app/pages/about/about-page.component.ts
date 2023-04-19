import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MetaInterface } from 'src/app/interfaces/meta.interface';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  private unsubscribe$ = new Subject<void>();
  meta? = <MetaInterface>{};

  pageDataObject: PageDataObject = {
    title: 'Frontend Developer',
    meta: {
      description:
        'Brief synopsis of my career as a Frontend Developer. History, tech stack, & hurdles. In addition to personal projects',
      keywords:
        'web developer services, full stack web developer, web programmer',
      title: 'About Frontend Developer',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  urlBlog: string = 'https://fredrickjaxx.is/';
  urlBookList: string = 'https://fredrickjaxx.is/about/';
  aboutPicture: string = '../../../../../assets/img/about-photo.jpg';
  urlChartCollection: string =
    'https://stackblitz.com/@eastcoastdeveloper/collections/chart-js-d3';

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService,
    private _router: Router
  ) {
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._projectListService.pageDataObject$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe({
            next: (val) => {
              this.meta = val.meta;
              if (Object.values(val).length) {
                this._globalFeatures.addTags(this.meta!);
              }
            }
          });
      }
    });
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
