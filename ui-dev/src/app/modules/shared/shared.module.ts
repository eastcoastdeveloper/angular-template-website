import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DevMenuComponent } from "../../development/components/dev-menu/dev-menu.component";
import { PostDetailsComponent } from "../../structural/post-details/post-details.component";
import { ProjectListComponent } from "src/app/development/components/project-list/project-list.component";
import { RouterModule } from "@angular/router";
import { LoaderComponent } from "src/app/development/components/loader/loader.component";

@NgModule({
  declarations: [
    DevMenuComponent,
    PostDetailsComponent,
    ProjectListComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DevMenuComponent,
    PostDetailsComponent,
    ProjectListComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
