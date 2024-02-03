import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SecurityRoutingModule, securityComponents } from './security.routing';
import { RightColumnModule } from '../shared/right-column.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [securityComponents],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    SecurityRoutingModule,
    RightColumnModule
  ],
  exports: []
})
export class SecurityModule {}
