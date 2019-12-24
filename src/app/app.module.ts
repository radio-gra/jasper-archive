import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeaturesComponent} from './features/features.component';
import {NavComponent} from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FeaturesComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
