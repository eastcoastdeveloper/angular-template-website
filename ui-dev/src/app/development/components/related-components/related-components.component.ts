import {
  AfterContentInit,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-related-components',
  templateUrl: './related-components.component.html',
  styleUrls: ['./related-components.component.scss']
})
export class RelatedComponentsComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  relatedItems: ProjectsListInterface[] = [];
  unsubscribe$ = new Subject<boolean>();
  pageDataObject: PageDataObject;
  @Input() type: string;

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _local: LocalStorageService,
    private _router: Router
  ) {
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.isThereCache();
        this.ngAfterContentInit();
      }
    });
  }

  ngOnInit(): void {
    this.isThereCache();

    this._projectListService.pageDataObject$.subscribe((value) => {
      this.pageDataObject = value;
    });

    // this.randomNumber = Math.floor(Math.random() * 3) + 1;
  }

  ngAfterContentInit(): ProjectsListInterface[] {
    let result: ProjectsListInterface = this._local.storage[this.type];
    let newArray: ProjectsListInterface[] = [];
    Object.values(result).forEach((currentItem) => {
      for (var i = 0; i < currentItem.length; i++) {
        newArray.push(currentItem[i]);
      }
    });

    this.relatedItems = newArray.sort((a, b) => 0.5 - Math.random());
    this.relatedItems.forEach((item, index) => {
      if (this.pageDataObject.title === item.title) {
        this.relatedItems.push(this.relatedItems.splice(index, 1)[0]);
      }
    });

    this.relatedItems = this.relatedItems.slice(0, 4);
    return this.relatedItems;
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  isThereCache() {
    const storage = this._local.getData('frontenddev');
    if (storage != '') {
      let parsed = JSON.parse(storage);
      this._local.storage = parsed;
    } else {
      this._projectListService.getAllProjects(this.type, 1, 10);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
