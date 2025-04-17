import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { GlobalFeaturesService } from './services/global-features.service';
import { SideBarService } from './services/sidebar-service';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DOCUMENT, LocationStrategy } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ProjectListService } from './services/project-list.service';
import { ConfigService } from './services/config.service';
import { CategoryInterface } from './interfaces/categories.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  },
  standalone: false
})
export class AppComponent
  implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy
{
  private unsubscribe$ = new Subject<void>();
  width: number = window.innerWidth;
  configObject: CategoryInterface;
  backButtonNotification = false;
  isMobile: boolean = false;
  mobileWidth: number = 760;
  totalComponennts: number;
  totalDevelopment: number;
  sidebarStatus: boolean;
  totalProjects: number;
  currentRoute: string;
  categoryType: string;
  historyIndex: number;
  queryParam: number | null;
  totalAll: number;

  constructor(
    public _globalFeatures: GlobalFeaturesService,
    private _sidebarService: SideBarService,
    private _local: LocalStorageService,
    private _projectListService: ProjectListService,
    private _location: LocationStrategy,
    private _configService: ConfigService,
    private _renderer: Renderer2,
    private _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // @HostListener('window:beforeunload') goToPage() {
  //   this._router.navigate(['/']);
  // }

  ngOnInit(): void {
    this._configService.categoryConfig$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.configObject = val;
      });
    this.isMobile = this.width < this.mobileWidth;
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.width = currentVal;
      });

    this._projectListService.categoryType$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.categoryType = val;
      });

    // Sidebar Service
    this._sidebarService.currentVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => (this.sidebarStatus = currentVal));

    // Remove Inability to Scroll
    this._router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      if (data instanceof NavigationEnd) {
        history.pushState(null, null!, location.href);
        this._location.onPopState(() => {
          history.pushState(null, null!, location.href);
          this.backButtonNotification = true;
          setTimeout(() => {
            this.backButtonNotification = false;
          }, 5000);
        });

        this._renderer.removeAttribute(this.document.body, 'class');
        this._globalFeatures.scrollToTop();
        this._sidebarService.changeValue(false);
      }
    });
  }

  // Reset Window Width Service
  ngAfterViewInit() {
    this._globalFeatures.changeWidth(window.innerWidth);
  }

  ngAfterContentChecked(): void {
    const storage = this._local.getData('frontenddev');
    if (storage != '') {
      const parsed = JSON.parse(storage);
      this._local.storage = parsed;
      this.totalAll = 26;
      this.totalProjects = 9;
      this.totalComponennts = 13;
      this.totalDevelopment = 4;
    }
  }

  closeMobileNav() {
    this._sidebarService.changeValue(false);
  }

  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    this.isMobile = this.width < this.mobileWidth;
    this._globalFeatures.changeWidth(this.width);
    this.width > 605 ? this._sidebarService.changeValue(false) : '';
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
