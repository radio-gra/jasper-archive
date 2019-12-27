import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeaturesComponent} from './features/features.component';
import {ArtistPageComponent} from './artist-page/artist-page.component';
import {AlbumPageComponent} from './album-page/album-page.component';
import {SearchPageComponent} from './search-page/search-page.component';

const routes: Routes = [
  {path: '', component: FeaturesComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'artist/:id', component: ArtistPageComponent},
  {path: 'album/:id', component: AlbumPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
