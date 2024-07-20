import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WindowRef } from './windowRef';
import { LoadingInterceptor } from './guards/loading.interceptor';
import { ConfigService } from './services/config.service';

export function appConfigInit(appConfigService: ConfigService) {
  return () => {
    return appConfigService.loadAppConfig();
  };
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    WindowRef,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigInit,
      multi: true,
      deps: [ConfigService]
    },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {}
