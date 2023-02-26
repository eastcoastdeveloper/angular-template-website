import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { LocalStorageInterface } from '../interfaces/localStorage.interface';
import { ProjectsListInterface } from '../interfaces/projects-list.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  key = 'prjx';
  // storageObject: LocalStorageInterface = new LocalStorageInterface();
  storageObject: LocalStorageInterface = new LocalStorageInterface();

  public saveData(key: string, value: string) {
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

  // Check for Cache (Called Once OnInit in ProjectList Cmpt)
  isThereCache(title: string) {
    const storage = this.getData('prjx');
    // this.projectArray = [];

    // // There IS Cache
    if (storage != '') {
      let parsed = JSON.parse(storage);
      this.storageObject = parsed;

      let result = Object.values(this.storageObject),
        newArray: ProjectsListInterface[] = [];

      for (var i = 0; i < result.length; i++) {
        result[i].forEach((value: ProjectsListInterface) => {
          newArray.push(value);
        });
      }

      newArray.forEach((currentValue) => {
        if (currentValue.title === title) {
          console.log(currentValue);
        }
      });
    }

    // There's NOTHING Cached
    else {
      return null;
    }
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
