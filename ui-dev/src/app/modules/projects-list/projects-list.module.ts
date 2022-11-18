import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RightColumnModule } from '../shared/right-column.module';
import { SharedModule } from '../shared/shared.module';

import {
  ProjectsListRoutingModule,
  projectsListRoutingComponents,
} from './projects-list.routing';

@NgModule({
  declarations: [projectsListRoutingComponents],
  imports: [CommonModule, ProjectsListRoutingModule, RightColumnModule, SharedModule],
})
export class ProjectListModule {}
