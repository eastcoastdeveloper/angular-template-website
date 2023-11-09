import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CategoryInterface } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public version: string;
  public apiEndpoint: string;

  categoryConfig$ = new BehaviorSubject<CategoryInterface>({
    categoryOne: '',
    categoryTwo: '',
    categoryThree: ''
  });

  constructor(private http: HttpClient) {}

  loadAppConfig(): Observable<any> {
    const url = '../../assets/config/app.config.json';

    return this.http.get<any>(url).pipe(
      map((response) => {
        this.categoryConfig$.next(response.masterObject);
      })
    );
  }
}
