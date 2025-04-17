import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
    standalone: false
})
export class BackButtonComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  history: string[] = [];

  constructor(private _navigationService: NavigationService) {}

  ngOnInit(): void {
    this._navigationService.historySubject$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((val) => {
        this.history = val;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
