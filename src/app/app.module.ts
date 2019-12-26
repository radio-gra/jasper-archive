import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeaturesComponent} from './features/features.component';
import {NavComponent} from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import {ArtistPageComponent} from './artist-page/artist-page.component';
import {AlbumPageComponent} from './album-page/album-page.component';

@NgModule({
  declarations: [AppComponent, FeaturesComponent, NavComponent, ArtistPageComponent, AlbumPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
