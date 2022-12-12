import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DevMenuComponent } from "../../development/components/dev-menu/dev-menu.component";
import { PostDetailsComponent } from "../../structural/post-details/post-details.component";
import { RouterModule } from "@angular/router";
import { LoaderComponent } from "src/app/development/components/loader/loader.component";
import { RightColumnModule } from "./right-column.module";
import { ProjectsListContentComponent } from "src/app/development/components/project-list/projects-list-content.component";
import { PaginationComponent } from "src/app/development/components/pagination/pagination.component";
import { CategoryNavigationComponent } from "src/app/development/components/category-navigation/category-navigation.component";

@NgModule({
  declarations: [
    DevMenuComponent,
    PostDetailsComponent,
    ProjectsListContentComponent,
    LoaderComponent,
    PaginationComponent,
    CategoryNavigationComponent,
  ],
  imports: [CommonModule, RouterModule, RightColumnModule],
  exports: [
    DevMenuComponent,
    PostDetailsComponent,
    ProjectsListContentComponent,
    LoaderComponent,
    PaginationComponent,
    CategoryNavigationComponent,
  ],
})
export class SharedModule {}
