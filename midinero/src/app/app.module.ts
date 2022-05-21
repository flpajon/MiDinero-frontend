import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyAdminGuard } from './commons/guards/onlyAdminGuard';
import { OnlyNormalUserGuard } from './commons/guards/onlyNormalUserGuard';
import { HttpInterceptorService } from './commons/interceptors/http-interceptor';
import { InformationModalComponent } from './components/_commons/modals/information-modal/information-modal.component';
import { QueryModalComponent } from './components/_commons/modals/query-modal/query-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationModalComponent,
    QueryModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    FontAwesomeModule,
    NgSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    InformationModalComponent,
    QueryModalComponent,
    OnlyAdminGuard,
    OnlyNormalUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
