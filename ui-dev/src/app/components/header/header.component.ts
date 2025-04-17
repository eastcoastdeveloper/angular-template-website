import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { GlobalFeaturesService } from '../../services/global-features.service';
import { SideBarService } from '../../services/sidebar-service';
import { Subject, takeUntil } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  standalone: false
})
export class HeaderComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  sidebarStatus!: boolean;
  currentUrl!: string;
  screenSize!: number;
  currentFilter: any;

  menuOpen?: boolean = false;
  @ViewChild('listElem') listElem: ElementRef;
  listElems: string[] = ['Web Development Unlimited', 'NASA App', 'IMDB'];
  selectedValue: string = 'Projects';

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private windowWidth: GlobalFeaturesService,
    public _sideBarService: SideBarService,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => (this.screenSize = currentVal));

    this._sideBarService.currentVal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((currentVal) => {
        this.sidebarStatus = currentVal;
      });
  }

  toggleMobileNav() {
    this.sidebarStatus = !this.sidebarStatus;
    if (this.sidebarStatus) {
      this._renderer.addClass(this.document.body, 'overflow-hidden');
      this._globalFeatures.scrollToTop();
    }
    if (!this.sidebarStatus) {
      this._renderer.removeAttribute(this.document.body, 'class');
    }
    this._sideBarService.changeValue(this.sidebarStatus);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.listElem.nativeElement.classList.toggle('show-menu');
  }

  clickHandler(item: string) {
    this.selectedValue = item;
    this.toggleMenu();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
