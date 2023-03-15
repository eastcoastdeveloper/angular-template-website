import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';

@Component({
  selector: 'app-components-wrapper',
  templateUrl: './components-wrapper.component.html',
  styleUrls: ['./components-wrapper.component.scss']
})
export class ComponentsWrapperComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  private unsubscribe$ = new Subject<void>();
  compsArray: ProjectsListInterface[] = [];
  categoryType: string = 'cmp';
  threeColumnLayout?: boolean = true;
  relatedItems: ProjectsListInterface[] = [];
  windowWidth: number;
  pageTitle?: string;
  cmpsArray: any;

  constructor(
    private _globalFeaturesService: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._globalFeaturesService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  ngAfterViewChecked(): void {
    this._projectListService.pageDataObject$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.pageTitle = val.title;
        this.threeColumnLayout = val.threeColumnLayout;
      });

    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
