import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss']
})
export class CategoryNavigationComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  dataArray: ProjectsListInterface[] = [];
  @Input() categoryType: string;
  menuOpen: boolean = false;
  windowWidth?: number;

  constructor(private _globalFeatures: GlobalFeaturesService) {}

  ngOnInit(): void {
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }

  // Get Cached Category & Reset DataArray
  navigateToURL(dataObject: ProjectsListInterface) {
    // const categoryQuery = this._localStorageService.getData('cats');
    // const parsedData = JSON.parse(categoryQuery);
    // this.dataArray = parsedData[this.categoryType].value;
    // if (dataObject.internal) {
    //   this.menuOpen = false;
    //   this._router.navigateByUrl(dataObject.path);
    // }
    // if (!dataObject.internal) {
    //   this.menuOpen = false;
    //   window.open(dataObject.path, '_blank');
    // }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
