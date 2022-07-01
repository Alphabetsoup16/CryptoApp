import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { StatusComponent } from './status/status.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoinsComponent } from './coins/coins.component';


@NgModule({
  declarations: [
    AppComponent,
    ExchangesComponent,
    StatusComponent,
    NavbarComponent,
    CoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
