import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { WindowWidthService } from "src/app/services/window-width.service";

@Component({
  selector: "app-modules-in-angular",
  templateUrl: "./modules-in-angular.component.html",
  styleUrls: ["./modules-in-angular.component.scss"],
})
export class ModulesInAngularComponent implements OnInit, OnDestroy {
  windowWidthSubscription: Subscription;
  windowWidth: number;

  constructor(private _windowWidthService: WindowWidthService) {}

  ngOnInit() {
    this.windowWidthSubscription = this._windowWidthService.currentWidth$.subscribe(
      (val) => {
        this.windowWidth = val;
      }
    );
  }

  ngOnDestroy(): void {
    this.windowWidthSubscription.unsubscribe();
  }
}
