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
import { DOCUMENT } from '@angular/common';
import { CanonicalService } from './services/canonical.service';
import { LocalStorageService } from './services/local-storage.service';
import { NavigationService } from './services/navigation.service';

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

  history: { url: string; hasParam: boolean; query: number | null }[] = [];
  width: number = window.innerWidth;
  isMobile: boolean = false;
  mobileWidth: number = 760;
  totalComponennts: number;
  totalDevelopment: number;
  backButtonActive = false;
  sidebarStatus: boolean;
  totalProjects: number;
  currentRoute: string;
  historyIndex: number;
  queryParam: number | null;
  totalAll: number;

  constructor(
    public _globalFeatures: GlobalFeaturesService,
    private _canonicalService: CanonicalService,
    private _sidebarService: SideBarService,
    private _local: LocalStorageService,
    private _navigationService: NavigationService,
    private _renderer: Renderer2,
    private _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this._canonicalService.setCanonicalURL();
    this.isMobile = this.width < this.mobileWidth;
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
      if (data instanceof NavigationEnd) {
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
      this.totalAll = parsed.totals.all;
      this.totalProjects = parsed.totals.prj;
      this.totalComponennts = parsed.totals.cmp;
      this.totalDevelopment = parsed.totals.dev;
    }
  }

  back(): void {
    this._navigationService.back();
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
