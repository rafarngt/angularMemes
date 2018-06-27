import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


// Componentes
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Rutas
import { RouteRoutingModule } from './route/route-routing.module';

// Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';

// Servicios
import { ProxyService } from './services/proxy.service';
import { SearchService } from './services/search/search.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    MDBBootstrapModule.forRoot()
    , HttpClientModule
  ],
  providers: [ProxyService, SearchService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
