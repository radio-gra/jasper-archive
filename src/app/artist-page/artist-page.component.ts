import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtistExtended} from '../models/artist-extended.model';
import {ArtistService} from '../services/artist.service';
import {AlbumService} from '../services/album.service';
import {Artist} from '../models/artist.model';
import {Album} from '../models/album.model';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.sass'],
})
export class ArtistPageComponent implements OnInit {
  public pageId: string;
  public artist: ArtistExtended;
  public loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private albumService: AlbumService
  ) {}

  public ngOnInit(): void {
    this.pageId = this.route.snapshot.paramMap.get('id');
    this.artistService.getArtistById(this.pageId).subscribe((artist: Artist) => {
      this.artist = artist as ArtistExtended;
      this.albumService.getAlbumsForArtist(this.pageId).subscribe((albums: Album[]) => {
        this.artist.albums = albums;
        this.loading = false;
      });
    });
  }
}
