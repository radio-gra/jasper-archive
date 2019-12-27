import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeaturesComponent} from './features/features.component';
import {NavComponent} from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import {ArtistPageComponent} from './artist-page/artist-page.component';
import {AlbumPageComponent} from './album-page/album-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SignupPageComponent} from './signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    NavComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    SearchPageComponent,
    SignupPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
