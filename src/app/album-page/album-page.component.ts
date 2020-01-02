import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Album} from '../models/album.model';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute} from '@angular/router';
import {RatingService} from '../services/rating.service';
import {AuthService} from '../services/auth.service';
import {Rating} from '../models/rating.model';
import {ReviewTitleBody} from '../models/review-title-body.model';
import {ReviewService} from '../services/review.service';
import {Review} from '../models/review.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.sass'],
})
export class AlbumPageComponent implements OnInit, AfterViewChecked {
  public pageId: string;
  public album: Album;
  public loading: boolean = true;
  public reviewTitle: FormControl;
  public reviewBody: FormControl;
  public pocketExpanded: boolean = false;

  public userRating: number = 0;
  public isRatingNow: boolean = false;
  public hasSubmittedRating: boolean = false;
  public submittedRatingValue: number = 0;
  public userReview: ReviewTitleBody = new ReviewTitleBody();
  public isReviewingNow: boolean = false;
  public hasSubmittedReview: boolean = false;
  public submittedReviewValue: ReviewTitleBody = new ReviewTitleBody();
  public otherReviews: Review[] = [];

  @ViewChild('ratingSlider', {static: false})
  public ratingSlider: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private authService: AuthService,
    private ratingService: RatingService,
    private reviewService: ReviewService
  ) {
    this.reviewTitle = new FormControl('');
    this.reviewBody = new FormControl('');
  }

  public ngOnInit(): void {
    this.pageId = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbumById(this.pageId).subscribe((album: Album) => {
      this.album = album;
      this.loading = false;

      if (this.authService.isLoggedIn()) {
        this.ratingService.getAuthUserRatingForAlbum(this.album._id).subscribe((rating: Rating) => {
          this.userRating = rating.value;
          this.hasSubmittedRating = true;
          this.submittedRatingValue = rating.value;
        });

        this.reviewService.getAuthUserReviewForAlbum(this.album._id).subscribe((review: Review) => {
          this.userReview.title = review.title;
          this.userReview.body = review.body;
          this.hasSubmittedReview = true;
          this.submittedReviewValue.title = review.title;
          this.submittedReviewValue.body = review.body;
        });

        this.reviewService.getReviewsForAlbumExceptOwn(this.album._id).subscribe((reviews: Review[]) => {
          this.otherReviews = reviews;
        });
      } else {
        this.reviewService.getReviewsForAlbum(this.album._id).subscribe((reviews: Review[]) => {
          this.otherReviews = reviews;
        });
      }
    });
  }

  public ngAfterViewChecked(): void {
    if (this.ratingSlider && this.ratingSlider.nativeElement.value !== this.userRating) {
      this.ratingSlider.nativeElement.value = this.userRating;
    }
  }

  public startRating(): void {
    if (this.hasSubmittedRating) {
      this.userRating = this.submittedRatingValue;
    } else {
      this.userRating = 5;
    }
    this.isRatingNow = true;
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
      this.hasSubmittedRating = true;
      this.submittedRatingValue = rating.value;
    });
  }

  public deleteUserRating(): void {
    this.ratingService.deleteAuthUserRating(this.album._id).subscribe((rating: Rating) => {
      this.userRating = 0;
      this.isRatingNow = false;
      this.hasSubmittedRating = false;
    });
  }

  public cancelUserRating(): void {
    this.userRating = 0;
    this.isRatingNow = false;
  }

  public startReviewing(): void {
    if (this.hasSubmittedReview) {
      this.userReview = this.submittedReviewValue;
      this.reviewTitle.setValue(this.userReview.title);
      this.reviewBody.setValue(this.userReview.body);
    }
    this.isReviewingNow = true;
  }

  public submitUserReview(): void {
    this.userReview.title = this.reviewTitle.value;
    this.userReview.body = this.reviewBody.value;
    this.reviewService
      .reviewAlbum(this.album._id, this.userReview.title, this.userReview.body)
      .subscribe((review: Review) => {
        this.userReview.title = review.title;
        this.userReview.body = review.body;
        this.isReviewingNow = false;
        this.hasSubmittedReview = true;
        this.submittedReviewValue.title = review.title;
        this.submittedReviewValue.body = review.body;
      });
  }

  public deleteUserReview(): void {
    this.reviewService.deleteAuthUserReview(this.album._id).subscribe((review: Review) => {
      this.userReview = new ReviewTitleBody();
      this.isReviewingNow = false;
      this.hasSubmittedReview = false;
    });
  }

  public cancelUserReview(): void {
    this.isReviewingNow = false;
  }
}
