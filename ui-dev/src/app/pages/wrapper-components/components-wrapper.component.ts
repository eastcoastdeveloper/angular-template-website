import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectListService } from 'src/app/services/project-list.service';
import { WindowWidthService } from 'src/app/services/window-width.service';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { RelatedComponentsService } from 'src/app/services/related-components.service';

@Component({
  selector: 'app-components-wrapper',
  templateUrl: './components-wrapper.component.html',
  styleUrls: ['./components-wrapper.component.scss']
})
export class ComponentsWrapperComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();
  compsArray: ProjectsListInterface[] = [];
  threeColumnLayout?: boolean;
  devMenuStatus?: boolean;
  windowWidth: number;
  pageTitle?: string;
  cmpsArray: any;

  constructor(
    private _relatedComponentsService: RelatedComponentsService,
    private _windowWidthService: WindowWidthService,
    private _projectListService: ProjectListService,
    private _cd: ChangeDetectorRef
  ) {
    // Category Wrapper Related Items
    this._relatedComponentsService.init(this.cmpsArray, 'components');
    this._relatedComponentsService.relatedItemsSubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.cmpsArray = val;
      });
  }

  ngOnInit(): void {
    // Get Window Width
    this._windowWidthService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  ngAfterViewChecked(): void {
    this._projectListService.pageDataObjectSubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.threeColumnLayout = val.threeColumnLayout;
        this.pageTitle = val.title;
      });

    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
