import {Component, OnInit} from '@angular/core';
import {Artist} from '../models/artist.model';
import {Album} from '../models/album.model';
import {ArtistService} from '../services/artist.service';
import {AlbumService} from '../services/album.service';
import {Review} from '../models/review.model';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass'],
})
export class FeaturesComponent implements OnInit {
  public loading: boolean = true;
  public artists: Artist[] = [];
  public albums: Album[] = [];
  public reviews: Review[] = [];

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private reviewService: ReviewService
  ) {}

  public ngOnInit(): void {
    this.artistService.getTrendingArtists(5).subscribe((artists: Artist[]) => {
      this.artists = artists;
      this.albumService.getTrendingAlbums(5).subscribe((albums: Album[]) => {
        this.albums = albums;
        this.reviewService.getTrendingReviews(5, 350).subscribe((reviews: Review[]) => {
          this.reviews = reviews;
          this.loading = false;
        });
      });
    });
  }
}
