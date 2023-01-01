import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WindowWidthService } from '../../services/window-width.service';
import { SideBarService } from '../../services/sidebar-service';
import { Subject, takeUntil } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ScrollToTopService } from 'src/app/services/scroll-to-top.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUrl!: string;
  menuOpen: boolean = false;
  sidebarStatus!: boolean;
  screenSize!: number;
  currentFilter: any;
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _scrollToTopService: ScrollToTopService,
    private windowWidth: WindowWidthService,
    public sideBarService: SideBarService,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.sideBarService.urlVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.currentUrl = currentVal;
      });
    this.windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => (this.screenSize = currentVal));

    this.sideBarService.currentVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.sidebarStatus = currentVal;
      });
  }

  // externalClick() {
  //   this.devMenu.closeMenu();
  //   if (this._router.url.includes("nasa")) {
  //     this.nasaSearchService.changeDatePickerVal(false);
  //   }
  // }

  toggleMobileNav() {
    this.sidebarStatus = !this.sidebarStatus;
    if (this.sidebarStatus) {
      this._renderer.addClass(this.document.body, 'overflow-hidden');
      this._scrollToTopService.scrollToTop();
    }
    if (!this.sidebarStatus) {
      this._renderer.removeAttribute(this.document.body, 'class');
    }
    this.sideBarService.changeValue(this.sidebarStatus);
  }

  navigateToContact() {
    window.location.href = 'https://frontenddevelopment.tech/inquire.html';
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
