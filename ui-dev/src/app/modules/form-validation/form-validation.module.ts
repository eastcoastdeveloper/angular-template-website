import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { SharedModule } from "../../../modules/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormValidationComponent } from "../../development/form-validation/form-validation.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: FormValidationComponent   }]),
    ReactiveFormsModule, // Option A: Provides the necessary directives/providers
    // SharedModule,  // Options B: SharedModule exports ReactiveFormsModule
  ],
  declarations: [FormValidationComponent]
})
export class FormValidationModule {}
