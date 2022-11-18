import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent implements OnInit, OnDestroy {
  windowWidth: number;
  subscription: Subscription;

  constructor(private _windowWidth: WindowWidthService) {}

  ngOnInit(): void {
    this.subscription = this._windowWidth.currentWidth$.subscribe(
      (currentVal) => {
        this.windowWidth = currentVal;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
