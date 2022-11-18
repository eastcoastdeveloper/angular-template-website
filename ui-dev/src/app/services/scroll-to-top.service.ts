import { Injectable } from "@angular/core";
import { WindowRef } from "../windowRef";

@Injectable({
  providedIn: "root",
})
export class ScrollToTopService {
  constructor(private _windowRef: WindowRef) {}

  scrollToTop() {
    this._windowRef.nativeWindow.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
