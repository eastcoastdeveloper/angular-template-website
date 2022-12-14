import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { BehaviorSubject, filter } from "rxjs";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  key = "prjs";
  filteredBehaviorSubject = new BehaviorSubject<ProjectsListInterface[]>([]);

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || "";
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

  // Populaate Page Content
  configureProjects(arr: ProjectsListInterface[]) {
    let categoryArray: ProjectsListInterface[] = [];
    if (arr.length < 9) {
      categoryArray = arr;
      console.log("fetch more items");
    } else {
      categoryArray = arr;
      console.log("use cached items");
      return categoryArray;
    }
  }
}
