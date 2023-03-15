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
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DOCUMENT, LocationStrategy } from '@angular/common';
import { CanonicalService } from './services/canonical.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class AppComponent
  implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy
{
  private unsubscribe$ = new Subject<void>();

  width: number = window.innerWidth;
  backButtonActive?: boolean;
  isMobile: boolean = false;
  mobileWidth: number = 760;
  sidebarStatus: boolean;
  currentRoute: string;

  totalAll: number;
  totalProjects: number;
  totalComponennts: number;
  totalDevelopment: number;
  backButtonMessage: boolean;
  browserRefresh: boolean = false;

  constructor(
    public _globalFeatures: GlobalFeaturesService,
    private _canonicalService: CanonicalService,
    private _sidebarService: SideBarService,
    private _local: LocalStorageService,
    private _location: LocationStrategy,
    private _renderer: Renderer2,
    private _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    // this.backButtonActive = this._globalFeatures.backButtonActive;
  }

  ngOnInit(): void {
    this._canonicalService.setCanonicalURL();
    this.isMobile = this.width < this.mobileWidth;

    this._globalFeatures.backButtonMessage$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((booleanValue) => {
        this.backButtonMessage = booleanValue;
      });

    this._globalFeatures.backButtonActive$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((d) => {
        this.backButtonActive = d;
      });

    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.width = currentVal;
      });

    // Sidebar Service
    this._sidebarService.currentVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => (this.sidebarStatus = currentVal));

    // Remove Inability to Scroll
    this._router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      if (data instanceof NavigationStart) {
        this.browserRefresh = this._router.navigated;
      }
      if (data instanceof NavigationEnd) {
        this._renderer.removeAttribute(this.document.body, 'class');
        this.currentRoute = data.url;
        // this._sidebarService.changeRoute(this.currentRoute);
        this._globalFeatures.scrollToTop();
        this._sidebarService.changeValue(false);

        // Back Button Navigation
        if (this.browserRefresh) {
          this.currentRoute = data.urlAfterRedirects;
          if (!this.backButtonActive) {
            this._globalFeatures.historyIndex++;
            this._globalFeatures.history.push(data.urlAfterRedirects);

            this._globalFeatures.history.forEach((item, index) => {
              // Remove Duplicate/ Partial URLs
              this._globalFeatures.history[index] ===
              this._globalFeatures.history[index - 1]
                ? this._globalFeatures.history.splice(index - 1, 1)
                : '';

              if (
                item === '/javascript-projects' ||
                item === '/ui-components/website-features' ||
                item === '/web-application-development/learn-to-code' ||
                item === '/web-development-projects/front-end-development'
              ) {
                this._globalFeatures.history.splice(index, 1);
                this._globalFeatures.historyIndex =
                  this._globalFeatures.history.length;
              }
            });
          }

          // Back Button Active
          if (this.backButtonActive) {
            this._globalFeatures.historyIndex - 1;
          }
          this._globalFeatures.historyIndex$.next(
            this._globalFeatures.historyIndex
          );
          this.preventBackButton();
        }
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
      let parsed = JSON.parse(storage);
      this._local.storage = parsed;
      this.totalAll = parsed.totals.all;
      this.totalProjects = parsed.totals.prj;
      this.totalComponennts = parsed.totals.cmp;
      this.totalDevelopment = parsed.totals.dev;
    }
  }

  preventBackButton() {
    history.pushState(null, null!, location.href);
    this._location.onPopState(() => {
      history.pushState(null, null!, location.href);
      this._globalFeatures.showBackButtonMessage();
    });
  }

  historyActiveState() {
    this._globalFeatures.backButtonActive$.next(false);
  }

  closeMobileNav() {
    this._sidebarService.changeValue(false);
  }

  closeNotification() {
    this._globalFeatures.backButtonMessage$.next(false);
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
