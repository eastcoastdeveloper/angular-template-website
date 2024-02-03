import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RedirectGuard } from './guards/redirect.guard';
import { FormConfirmationComponent } from './pages/form-confirmation/form-confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: 'compliance-library', pathMatch: 'full' },
  {
    path: 'leadership',
    loadChildren: () =>
      import(`./modules/apps/apps.module`).then((m) => m.AppsModule)
  },
  {
    path: 'standards',
    loadChildren: () =>
      import(`./modules/components/components.module`).then(
        (m) => m.ComponentsModule
      )
  },
  {
    path: 'security',
    loadChildren: () =>
      import(`./modules/development/development.module`).then(
        (m) => m.DevelopmentModule
      )
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import(`./modules/about/about.module`).then((m) => m.AboutPageModule)
  },
  {
    path: 'compliance-library',
    loadChildren: () =>
      import(`./modules/projects-list/projects-list.module`).then(
        (m) => m.ProjectListModule
      )
  },
  {
    path: '**',
    redirectTo: 'compliance-library'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [RedirectGuard]
})
export class AppRoutingModule {}

export const appRoutingComponents = [FormConfirmationComponent];
