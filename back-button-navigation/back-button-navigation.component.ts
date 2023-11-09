// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subject, takeUntil } from 'rxjs';
// import { GlobalFeaturesService } from 'src/app/services/global-features.service';

// @Component({
//   selector: 'app-back-button-navigation',
//   templateUrl: './back-button-navigation.component.html',
//   styleUrls: ['./back-button-navigation.component.scss']
// })
// export class BackButtonNavigationComponent implements OnInit, OnDestroy {
//   private unsubscribe$ = new Subject<void>();
//   historyIndex?: number;
//   width: number;

//   constructor(private _globalFeatures: GlobalFeaturesService) {}

//   ngOnInit(): void {
//     this._globalFeatures.currentWidth$
//       .pipe(takeUntil(this.unsubscribe$))
//       .subscribe((data) => {
//         this.width = data;
//       });

//     this._globalFeatures.historyIndex$.subscribe((d) => {
//       this.historyIndex = d;
//     });
//   }

//   // backButtonNavigation() {
//   //   this._globalFeatures.goBack();
//   //   this._globalFeatures.hideBackButtonMessage();
//   // }

//   ngOnDestroy() {
//     this.unsubscribe$.next();
//     this.unsubscribe$.complete();
//   }
// }
