// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class DevMenuService {
//   devMenu?: boolean = false;
//   private devMenuSource = new BehaviorSubject(this.devMenu);
//   devMenuState$ = this.devMenuSource.asObservable();

//   changeValue(newValue: boolean) {
//     this.devMenu ? (this.devMenu = false) : (this.devMenu = true);
//     this.devMenuSource.next(newValue);
//   }

//   closeMenu() {
//     this.devMenuSource.next(false);
//     this.devMenu = false;
//   }
// }
