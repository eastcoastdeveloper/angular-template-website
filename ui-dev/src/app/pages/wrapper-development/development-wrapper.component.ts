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
  selector: 'app-development',
  templateUrl: './development-wrapper.component.html'
})
export class DevelopmentWrapper implements OnInit, AfterViewChecked, OnDestroy {
  developmentArray: ProjectsListInterface[] = [];
  private unsubscribe$ = new Subject<void>();
  threeColumnLayout?: boolean = false;
  devMenuStatus: boolean;
  windowWidth: number;
  pageTitle?: string;
  arrayIndex: number;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.windowWidth = currentVal;
      });
  }

  ngAfterViewChecked(): void {
    this._projectListService.pageDataObject$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.threeColumnLayout = val.threeColumnLayout;
        this.pageTitle = val.title;
      });

    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
