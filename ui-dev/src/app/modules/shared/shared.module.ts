import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../../components/post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { RightColumnModule } from './right-column.module';
import { ProjectsListContentComponent } from 'src/app/components/project-list/projects-list-content.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { CategoryNavigationComponent } from 'src/app/components/category-navigation/category-navigation.component';
import { RelatedComponentsComponent } from 'src/app/components/related-components/related-components.component';
import { EndOfPostComponent } from 'src/app/components/end-of-post/end-of-post.component';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { BackButtonDirective } from 'src/app/directives/back-button.directive';
import { LibraryComponent } from 'src/app/pages/library/library.component';

@NgModule({
  declarations: [
    PostDetailsComponent,
    ProjectsListContentComponent,
    LoaderComponent,
    PaginationComponent,
    CategoryNavigationComponent,
    RelatedComponentsComponent,
    EndOfPostComponent,
    BackButtonComponent,
    BackButtonDirective,
    LibraryComponent
  ],
  imports: [CommonModule, RouterModule, RightColumnModule],
  exports: [
    PostDetailsComponent,
    ProjectsListContentComponent,
    LoaderComponent,
    PaginationComponent,
    CategoryNavigationComponent,
    RelatedComponentsComponent,
    EndOfPostComponent,
    BackButtonComponent,
    BackButtonDirective,
    LibraryComponent
  ]
})
export class SharedModule {}
