import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../../structural/post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from 'src/app/development/components/loader/loader.component';
import { RightColumnModule } from './right-column.module';
import { ProjectsListContentComponent } from 'src/app/development/components/project-list/projects-list-content.component';
import { PaginationComponent } from 'src/app/development/components/pagination/pagination.component';
import { CategoryNavigationComponent } from 'src/app/development/components/category-navigation/category-navigation.component';
import { RelatedComponentsComponent } from 'src/app/development/components/related-components/related-components.component';

@NgModule({
  declarations: [
    PostDetailsComponent,
    ProjectsListContentComponent,
    LoaderComponent,
    PaginationComponent,
    CategoryNavigationComponent,
    RelatedComponentsComponent
  ],
  imports: [CommonModule, RouterModule, RightColumnModule],
  exports: [
    PostDetailsComponent,
    ProjectsListContentComponent,
    LoaderComponent,
    PaginationComponent,
    CategoryNavigationComponent,
    RelatedComponentsComponent
  ]
})
export class SharedModule {}
