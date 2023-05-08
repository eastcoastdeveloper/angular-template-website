import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = [];
  private queryParam: number | null;
  historySubject$ = new BehaviorSubject<string[]>(this.history);

  constructor(private router: Router, private _activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._activatedRoute.queryParams.subscribe((val) => {
          if (Object.values(val).length > 0) {
            this.queryParam = parseInt(val['page']);
          } else {
            this.queryParam = null;
          }
        });
        this.history.push(event.urlAfterRedirects);

        // Remove duplicates
        if (
          this.history[this.history.length - 1] ===
          this.history[this.history.length - 2]
        ) {
          this.history.pop();
        }

        // Remove URLs w/ out query params
        if (this.queryParam) {
          for (var i = 0; i < this.history.length; i++) {
            if (!this.history[i].includes('page=')) {
              for (var j = 0; j < this.history.length; j++) {
                if (this.history[j].includes('page=')) {
                  if (
                    this.history[i] ===
                    this.history[j].slice(0, this.history[j].indexOf('?'))
                  ) {
                    this.history.splice(i, 1);
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  back() {
    var arr = this.history;
    if (arr.length > 1) {
      arr.pop();
      if (arr[arr.length - 1].includes('?page=')) {
        const urlEndingPosition = arr[arr.length - 1].indexOf('?');
        const url = arr[arr.length - 1].slice(0, urlEndingPosition);
        const queryParamIndex = arr[arr.length - 1].indexOf('=');
        const queryParamValue = arr[arr.length - 1].slice(queryParamIndex + 1);
        this.router.navigate([url], {
          queryParams: {
            page: queryParamValue
          }
        });
      } else {
        this.router.navigateByUrl(arr[arr.length - 1]);
      }
      arr = this.history;
    }
  }
}
