import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ProjectsListInterface } from '../interfaces/projects-list.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectCategoryService {
  categorySubject = new BehaviorSubject<ProjectsListInterface[]>([]);

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  // Remove Duplicate Objects from Cache
  removeDuplicateObjectFromArray(array: ProjectsListInterface[], key: string) {
    var check = new Set();
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  }

  // Call Category API
  configureCategory(type: string) {
    const categoryQuery = this._localStorageService.getData('prjx');

    // Something is Cached
    if (categoryQuery != '') {
      this._localStorageService.storageObject = JSON.parse(categoryQuery);

      //result: (page 1: array, page 2: array)
      let result = Object.values(this._localStorageService.storageObject),
        allItems: ProjectsListInterface[] = [],
        categoryArray: ProjectsListInterface[] = [];

      // allItems: All values combined (projects, components, & development) into one array
      for (var i = 0; i < result.length; i++) {
        result[i].forEach((value: ProjectsListInterface) => {
          allItems.push(value);
        });
      }

      // Extract items in category
      allItems.forEach((currentValue) => {
        if (currentValue.category === type) {
          categoryArray.push(currentValue);
        }
      });

      // Do items exist in this category?
      if (categoryArray.length > 0) {
        this.categorySubject.next(categoryArray);
      }
    }

    // There is NO Cache
    if (categoryQuery === '') {
      this.fetchCategory(type);
    }
  }

  // Called if there's NO Cache
  fetchCategory(type: string) {
    let allCategories: ProjectsListInterface[] = [];
    const httpOptions = {
      headers: new HttpHeaders()
    };

    return this._http
      .get<HttpResponse<ProjectsListInterface>>(
        `/api/category/?type=${type}`,
        httpOptions
      )
      .pipe(
        map((responseData) => {
          Object.keys(responseData).filter((currentVal, index) => {
            currentVal === 'results'
              ? (allCategories = Object.values(responseData)[index])
              : '';
          });
          allCategories.map((val) => {
            allCategories.push(val);
          });
          return allCategories;
        })
      )
      .subscribe((data) => {
        const filteredCategories = this.removeDuplicateObjectFromArray(
          data,
          'title'
        );

        /*
          Subscribed to in:
            category-navigation cmpt
            cornerstone-apps cmpt
            cornerstone-components cmpt
            cornerstone-development cmpt
            related-components cmpt
        */
        this.categorySubject.next(filteredCategories);
      });
  }
}
