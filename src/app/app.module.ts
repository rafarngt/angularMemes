import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboadComponent } from './components/pages/dashboad/dashboad.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboadComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    , MDBBootstrapModule.forRoot()
    , HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
