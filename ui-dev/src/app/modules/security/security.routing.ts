import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafetySecurityComponent } from 'src/app/content/safety-security/safety-security.component';
import { LibraryComponent } from 'src/app/pages/library/library.component';
import { SecurityComponent } from 'src/app/pages/security/security.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      { path: '', redirectTo: 'security-classes', pathMatch: 'full' },
      {
        path: 'security-classes',
        component: SecurityComponent
      },
      {
        path: 'safety-security',
        component: SafetySecurityComponent
      },
      { path: '**', redirectTo: 'security-classes' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}

export const securityComponents = [SafetySecurityComponent, SecurityComponent];
