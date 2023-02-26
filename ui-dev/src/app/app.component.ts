import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WindowWidthService } from './services/window-width.service';
import { SideBarService } from './services/sidebar-service';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ScrollToTopService } from './services/scroll-to-top.service';
import { DOCUMENT } from '@angular/common';
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();
  resizeID: any;
  window: any;

  isMobile: boolean = false;
  sidebarStatus: boolean;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  mobileWidth: number = 760;
  currentRoute: string;

  constructor(
    private _windowService: WindowWidthService,
    private _sidebarService: SideBarService,
    private _scrollToTop: ScrollToTopService,
    private _router: Router,
    private _canonicalService: CanonicalService,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this._canonicalService.setCanonicalURL();
    this.isMobile = this.width < this.mobileWidth;

    // Window Service
    this._windowService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.width = currentVal;
      });

    // Sidebar Service
    this._sidebarService.currentVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => (this.sidebarStatus = currentVal));

    this._sidebarService.urlVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => (this.currentRoute = currentVal));

    // Remove Inability to Scroll
    this._router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._renderer.removeAttribute(this.document.body, 'class');
        this.currentRoute = data.url;
        this._sidebarService.changeRoute(this.currentRoute);
        this._scrollToTop.scrollToTop();
        this._sidebarService.changeValue(false);
      }
    });
  }

  // Reset Window Width Service
  ngAfterViewInit() {
    this._windowService.changeWidth(window.innerWidth);
  }

  closeMobileNav() {
    this._sidebarService.changeValue(false);
  }

  navigateToContact() {
    window.location.href =
      'https://frontenddevelopment.tech/contact/inquire.html';
  }

  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    this._windowService.changeWidth(this.width);
    this._windowService.changeHeight(this.height);
    this.width > 605 ? this._sidebarService.changeValue(false) : '';
    console.log(this.height);
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
