import { Component, OnInit } from '@angular/core';
import { CarsInterface } from '../../../interfaces/table-paginated.interface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';

@Component({
  selector: 'table-paginated',
  templateUrl: './table-paginated.component.html',
  styleUrls: ['./table-paginated.component.scss']
})
export class TablePaginatedComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'Angular Data Table',
    publishedOn: 'Aug 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-data-table',
    repoLink:
      'https://github.com/eastcoastdeveloper/angular-8-table-pagination',
    category: '',
    views: 6671,
    forks: 191,
    threeColumnLayout: true,
    cornerStone: false
  };

  cars: CarsInterface[] = [
    {
      year: '1967',
      make: 'Pontiac',
      model: 'GTO'
    },
    {
      year: '1967',
      make: 'Pontiac',
      model: 'Firebird'
    },
    {
      year: '1967',
      make: 'Chevrolet',
      model: 'Malibu SS 396'
    },
    {
      year: '1967',
      make: 'Chevrolet',
      model: 'Camaro SS'
    },
    {
      year: '1967',
      make: 'Chevrolet',
      model: 'Camaro Z/28'
    },
    {
      year: '1967',
      make: 'Chevrolet',
      model: 'RS'
    },
    {
      year: '1967',
      make: 'Chevrolet',
      model: 'Nova SS'
    },
    {
      year: '1967',
      make: 'Oldsmobile',
      model: '442'
    },
    {
      year: '1967',
      make: 'Buick',
      model: 'Gran Sport'
    },
    {
      year: '1967',
      make: 'Ford',
      model: 'Mustang GT'
    },
    {
      year: '1967',
      make: 'Ford',
      model: 'Mustang GTA'
    },
    {
      year: '1967',
      make: 'Ford',
      model: 'Fairlane GTA'
    },
    {
      year: '1967',
      make: 'Shelby',
      model: 'Cobra'
    },
    {
      year: '1967',
      make: 'Shebly',
      model: 'Mustang GT350'
    },
    {
      year: '1967',
      make: 'Shelby',
      model: 'GT500'
    },
    {
      year: '1967',
      make: 'Mercury',
      model: 'Cougar Special'
    },
    {
      year: '1967',
      make: 'Mercury',
      model: 'Cyclone GT'
    },
    {
      year: '1967',
      make: 'Mercury',
      model: '427 Comet'
    },
    {
      year: '1967',
      make: 'Plymouth',
      model: 'Barracudda S'
    },
    {
      year: '1967',
      make: 'Plymouth GTX',
      model: 'GTO'
    },
    {
      year: '1967',
      make: 'Dodge',
      model: 'Dart GT'
    },
    {
      year: '1967',
      make: 'Dodge Dart GTS',
      model: 'GTO'
    },
    {
      year: '1967',
      make: 'Dodge',
      model: 'Charger'
    },
    {
      year: '1967',
      make: 'Dodge',
      model: 'Coronet R/T'
    },
    {
      year: '1967',
      make: 'Dodge',
      model: 'Coronet 500 Hemi'
    }
  ];

  masterArray: CarsInterface[] = this.cars.slice();
  windowWidth: number;
  p: any;

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  enteredSearchValue: string = '';

  applyFilter(filterValue: string) {
    this.p = 0;
    if (this.enteredSearchValue != '') {
      let filtered = this.masterArray.filter((elem: any) => {
        return (
          elem.make.includes(filterValue) || elem.model.includes(filterValue)
        );
      });
      this.cars = filtered;
    }
    if (this.enteredSearchValue === '') {
      return (this.cars = this.masterArray);
    }
  }

  json: string = `[
    { "year": "1967", "make": "Pontiac", "model": "GTO" },
    { "year": "1967", "make": "Pontiac", "model": "Firebird" },
    { "year": "1967", "make": "Chevrolet", "model": "Malibu SS 396" },
    { "year": "1967", "make": "Chevrolet", "model": "Camaro SS" },
    { "year": "1967", "make": "Chevrolet", "model": "Camaro Z/28" },
    { "year": "1967", "make": "Chevrolet", "model": "RS" },
    { "year": "1967", "make": "Chevrolet", "model": "Nova SS" },
    { "year": "1967", "make": "Oldsmobile", "model": "442" },
    { "year": "1967", "make": "Buick", "model": "Gran Sport" },
    { "year": "1967", "make": "Ford", "model": "Mustang GT" },
    { "year": "1967", "make": "Ford", "model": "Mustang GTA" },
    { "year": "1967", "make": "Ford", "model": "Fairlane GTA" },
    { "year": "1967", "make": "Shelby", "model": "Cobra" },
    { "year": "1967", "make": "Shebly", "model": "Mustang GT350" },
    { "year": "1967", "make": "Shelby", "model": "GT500" },
    { "year": "1967", "make": "Mercury", "model": "Cougar Special" },
    { "year": "1967", "make": "Mercury", "model": "Cyclone GT" },
    { "year": "1967", "make": "Mercury", "model": "427 Comet" },
    { "year": "1967", "make": "Plymouth", "model": "Barracudda Formula S" },
    { "year": "1967", "make": "Plymouth GTX", "model": "GTO" },
    { "year": "1967", "make": "Dodge", "model": "Dart GT" },
    { "year": "1967", "make": "Dodge Dart GTS", "model": "GTO" },
    { "year": "1967", "make": "Dodge", "model": "Charger" },
    { "year": "1967", "make": "Dodge", "model": "Coronet R/T" },
    { "year": "1967", "make": "Dodge", "model": "Coronet 500 Hemi" }
  ]`;

  appModule: string = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPaginationModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
`;

  typescript: string = `import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { CarsResponse } from './cars.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cars: CarsResponse[] = [];
  p: any;

  constructor(private _http: HttpClient) {
    this.tableDataReq();
  }

  tableDataReq() {
    return this._http
      .get<CarsResponse[]>('assets/cars.json')
      .pipe(
        tap({
          next: (data: any) => {},
          error: (err: any) => console.log(err),
          complete: () => console.log('request successful')
        })
      )
      .subscribe((val) => {
        this.cars = val;
      });
  }
}`;

  interface: string = `export interface CarsResponse {
    year: string;
    make: string;
    model: string;
}`;

  styling: string = `#table-component {
  font: normal 14px sans-serif;
  margin: 15px auto 0 auto;
  border: 1px solid black;
  border-radius: 4px;
  height: 400px;
  max-width: 500px;

  > .table-details {
    background-color: #313b3f;
    color: #d9a74a;
    margin: 0;
    padding: 10px;
    span:last-child {
      float: right;
    }
  }

  table {
    margin-top: 15px;
    width: 100%;
    border-collapse: collapse;

    tr {
      td:first-child { padding-left: 10px; }
    }

    td {
      width: 33.3%;
      font-size: 13px;
    }

    thead { font-size: 14px;
      th {
        border-bottom: 1px solid black;
        text-align: left;
        padding-bottom: 5px;
      }
    }

    .pl-15 { padding-left: 15px; }

    tbody {
      td {
        padding: 5px 0;
        border-bottom: 1px solid lightgrey;
      }
    }
  }

  .pagination {
    font-size: 14px;
    text-align: center;
    margin: 20px auto;
  }

  ::ng-deep .pagination-next a,
  ::ng-deep .pagination-previous a {
    outline: none;
  }

  ::ng-deep .ngx-pagination .current {
    border-radius: 4px;
  }

  ::ng-deep .ngx-pagination {
    padding: 0 !important;
  }

  ::ng-deep .ngx-pagination a:hover,
  ::ng-deep .ngx-pagination button:hover {
    border-radius: 4px;
  }

  ::ng-deep .ngx-pagination a,
  ::ng-deep .ngx-pagination button {
    border-radius: 4px;
    outline: none;
  }
}

@media screen and (max-width: 520px) {
  #table-component {
    margin: 15px;
  }
}`;

  markup: string = `<div id="table-component">
  <div class="table-details">
    <span>Popular Muscle Cars</span>
    <span>Total Vehicles: {{ cars.length }}</span>
  </div>
  <table>
    <thead>
      <tr>
        <th class="pl-15">Year</th>
        <th>Make</th>
        <th>Model</th>
      </tr>
    </thead>
    <tbody>
      <tr
        *ngFor="
          let car of cars | paginate: { itemsPerPage: 10, currentPage: p }
        "
      >
        <td class="pl-15">{{ car.year }}</td>
        <td>{{ car.make }}</td>
        <td>{{ car.model }}</td>
      </tr>
    </tbody>
  </table>
  <div class="pagination">
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  </div>
</div>`;
}
