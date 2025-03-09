import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RedirectGuard } from './guards/redirect.guard';

const routes: Routes = [
  { path: '', redirectTo: 'compliance-library', pathMatch: 'full' },
  { path: '404', redirectTo: 'compliance-library', pathMatch: 'full' },
  {
    path: 'leadership',
    loadChildren: () =>
      import(`./modules/leadership/leadership.module`).then(
        (m) => m.LeadershipModule
      )
  },
  {
    path: 'standards',
    loadChildren: () =>
      import(`./modules/standards/standards.module`).then(
        (m) => m.StandardsModule
      )
  },
  {
    path: 'security',
    loadChildren: () =>
      import(`./modules/security/security.module`).then((m) => m.SecurityModule)
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import(`./modules/about/about.module`).then((m) => m.AboutPageModule)
  },
  {
    path: 'compliance-library',
    loadChildren: () =>
      import(`./modules/library/library.module`).then((m) => m.LibraryModule)
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
