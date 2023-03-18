import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-routing-in-angular',
  templateUrl: './routing-in-angular.component.html',
  styleUrls: ['./routing-in-angular.component.scss']
})
export class RoutingInAngularComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  windowWidth: number;
  componentImport: string;
  featureModule: string;
  basicRouter: string;
  lazyLoading: string;
  pageDataObject: PageDataObject = {
    title: 'Routing in Angular',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'routing-in-angular',
    repoLink:
      'https://github.com/eastcoastdeveloper/angular-routing-between-modules',
    category: '',
    views: 2604,
    forks: 139,
    cornerStone: true,
    threeColumnLayout: true
  };

  constructor(
    private _globalFeaturesService: GlobalFeaturesService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit() {
    this._globalFeaturesService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });

    this.renderCode();
  }

  renderCode() {
    this.componentImport = `// Router
import { ComponentOne } ...
import { ComponentTwo } ...
import { ComponentThree } ...
    
const routes: Routes = [
   { path: '...', component: ComponentOne   },
   { path: '...', component: ComponentTwo   },
   { path: '...', component: ComponentThree },
];
    
@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})

export class SampleRouterModule {} 
export const routerComponents = [ComponentOne, ComponentTwo, ComponentThree];

// Module
// Import Cmpts vs Duplicate Statements
import { SampleRouterModule, routerComponents } from './sample-route.routing';

@NgModule({
  declarations: [ComponentOne, ComponentTwo, ComponentThree],
  imports: [CommonModule, ModuleOneRoutingModule],
})

export class SampleModule {}
`;

    this.basicRouter = `import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'module-one', component: 'SomeComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
`;

    this.lazyLoading = `import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
    
const routes: Routes = [
  {
    path: 'feature-module',
    loadChildren: () => import('./feature-module.module').then((m) => m.ModuleOneModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}`;

    this.featureModule = `// Feature Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
    
const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [{ path: 'my-route', component: FeatureComponent }],
  },
];
    
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}`;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
