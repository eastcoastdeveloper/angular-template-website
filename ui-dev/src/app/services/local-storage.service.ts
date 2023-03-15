import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalStorageInterface } from '../interfaces/localStorage.interface';
import { ProjectsListInterface } from '../interfaces/projects-list.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage$ = new BehaviorSubject<LocalStorageInterface>({
    all: {},
    projects: {},
    cmp: {},
    dev: {},
    totals: {
      all: undefined,
      prj: undefined,
      cmp: undefined,
      dev: undefined
    }
  });
  key = 'frontenddev';
  storage: LocalStorageInterface = {
    all: {},
    projects: {},
    cmp: {},
    dev: {},
    totals: {
      all: undefined,
      prj: undefined,
      cmp: undefined,
      dev: undefined
    }
  };

  public saveData(key: string, value: string) {
    this.localStorage$.next(JSON.parse(value));
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
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

  // Populate Page Content
  configureProjects(arr: ProjectsListInterface[]) {
    let categoryArray: ProjectsListInterface[] = [];
    if (arr.length < 9) {
      categoryArray = arr;
    } else {
      categoryArray = arr;
      return categoryArray;
    }
  }
}
