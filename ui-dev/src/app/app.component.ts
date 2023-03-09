import {
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
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();
  resizeID: any;
  window: any;

  isMobile: boolean = false;
  sidebarStatus: boolean;
  width: number = window.innerWidth;
  mobileWidth: number = 760;
  currentRoute: string;
  backButtonActive?: boolean;

  constructor(
    public _globalFeatures: GlobalFeaturesService,
    private _sidebarService: SideBarService,
    private _router: Router,
    private _location: LocationStrategy,
    private _canonicalService: CanonicalService,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.backButtonActive = this._globalFeatures.backButtonActive;
  }

  ngOnInit(): void {
    this._canonicalService.setCanonicalURL();
    this.isMobile = this.width < this.mobileWidth;

    // Window Service
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.width = currentVal;
      });

    // Sidebar Service
    this._sidebarService.currentVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => (this.sidebarStatus = currentVal));

    // this._sidebarService.urlVal$
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((currentVal) => (this.currentRoute = currentVal));

    // Remove Inability to Scroll
    this._router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._renderer.removeAttribute(this.document.body, 'class');
        this.currentRoute = data.url;
        // this._sidebarService.changeRoute(this.currentRoute);
        this._globalFeatures.scrollToTop();
        this._sidebarService.changeValue(false);

        // Back Button Navigation
        this.currentRoute = data.urlAfterRedirects;

        if (!this._globalFeatures.backButtonActive) {
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
        if (this._globalFeatures.backButtonActive) {
          this._globalFeatures.historyIndex - 1;
        }
        this.preventBackButton();
      }
    });
  }

  // Reset Window Width Service
  ngAfterViewInit() {
    this._globalFeatures.changeWidth(window.innerWidth);
  }

  preventBackButton() {
    history.pushState(null, null!, location.href);
    this._location.onPopState(() => {
      history.pushState(null, null!, location.href);
      console.log('Please use app buttons');
    });
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
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
