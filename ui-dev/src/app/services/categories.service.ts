import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectsListInterface } from '../interfaces/projects-list.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  dataSubject$ = new BehaviorSubject<ProjectsListInterface[]>([]);
  categoryType: string;

  constructor(private _localService: LocalStorageService) {}

  // Called from Related Components
  isCategoryCached(type: string) {
    this.categoryType = type;
    const storage = this._localService.getData('frontenddev');
    if (storage === '') {
      this.dataSubject$.next([]);
    } else {
      let parsed = JSON.parse(storage);
      this.dataSubject$.next(parsed[type][1]);
      return parsed;
    }
  }
}
