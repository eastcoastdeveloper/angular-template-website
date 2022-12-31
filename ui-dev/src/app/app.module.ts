import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule, appRoutingComponents } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "./modules/shared/shared.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./structural/header/header.component";
import { FooterComponent } from "./structural/footer/footer.component";
import { FormConfirmationComponent } from "./pages/form-confirmation/form-confirmation.component";
import { WindowRef } from "./windowRef";
import { LoadingInterceptor } from "./guards/loading.interceptor";
import { ExternalLinkComponent } from './development/components/external-link/external-link.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    appRoutingComponents,
    FormConfirmationComponent,
    ExternalLinkComponent,
  ],
  providers: [
    HttpClientModule,
    WindowRef,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
