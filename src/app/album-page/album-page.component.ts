import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Album} from '../models/album.model';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute} from '@angular/router';
import {RatingService} from '../services/rating.service';
import {AuthService} from '../services/auth.service';
import {Rating} from '../models/rating.model';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.sass'],
})
export class AlbumPageComponent implements OnInit, AfterViewChecked {
  public pageId: string;
  public album: Album;
  public userRating: number = 0;
  public loading: boolean = true;
  public isRatingNow: boolean = false;

  @ViewChild('ratingSlider', {static: false})
  public ratingSlider: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private authService: AuthService,
    private ratingService: RatingService
  ) {}

  public ngOnInit(): void {
    this.pageId = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbumById(this.pageId).subscribe((album: Album) => {
      this.album = album;
      this.loading = false;

      if (this.authService.isLoggedIn()) {
        this.ratingService.getAuthUserRatingForAlbum(this.album._id).subscribe((rating: Rating) => {
          this.userRating = rating.value;
        });
      }
    });
  }

  public ngAfterViewChecked(): void {
    if (this.ratingSlider && this.ratingSlider.nativeElement.value !== this.userRating) {
      this.ratingSlider.nativeElement.value = this.userRating;
    }
  }

  public updateUserRating(): void {
    if (this.ratingSlider) {
      this.userRating = parseInt(this.ratingSlider.nativeElement.value);
    } else {
      this.userRating = 0;
    }
  }

  public submitUserRating(): void {
    this.ratingService.rateAlbum(this.album._id, this.userRating).subscribe((rating: Rating) => {
      this.userRating = rating.value;
      this.isRatingNow = false;
    });
  }

  public deleteUserRating(): void {
    this.ratingService.deleteAuthUserRating(this.album._id).subscribe((rating: Rating) => {
      this.userRating = 0;
      this.isRatingNow = false;
    });
  }
}
