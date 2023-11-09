import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { LocalStorageInterface } from '../interfaces/localStorage.interface';
import { ConfigService } from './config.service';
import { CategoryInterface } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private unsubscribe$ = new Subject<void>();
  configObject: CategoryInterface;

  constructor(private _configService: ConfigService) {
    this._configService.categoryConfig$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.configObject = val;
      });
  }

  localStorage$ = new BehaviorSubject<LocalStorageInterface>({
    all: {},
    leadership: {},
    standards: {},
    security: {},
    totals: {
      all: undefined,
      leadership: undefined,
      standards: undefined,
      security: undefined
    }
  });
  key = 'frontenddev';
  storage: LocalStorageInterface = {
    all: {},
    leadership: {},
    standards: {},
    security: {},
    totals: {
      all: undefined,
      leadership: undefined,
      standards: undefined,
      security: undefined
    }
  };

  public saveData(key: string, value: string) {
    this.localStorage$.next(JSON.parse(value));
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    const data = localStorage.getItem(key) || '';
    return this.decrypt(data);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(
      CryptoJS.enc.Utf8
    );
  }
}
