import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Review} from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  public getReviewsForAlbum(albumId: string): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:1337/review/foralbum/' + albumId);
  }

  public getReviewsForAlbumExceptOwn(albumId: string): Observable<Review[]> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.authToken,
    });
    return this.http.get<Review[]>('http://localhost:1337/review/other/' + albumId, {headers: headers});
  }

  public deleteReview(reviewId: string): Observable<Review> {
    return this.http.delete<Review>('http://localhost:1337/review/' + reviewId);
  }

  public getAuthUserReviewForAlbum(albumId: string): Observable<Review> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.authToken,
    });
    return this.http.get<Review>('http://localhost:1337/review/my/' + albumId, {headers: headers});
  }

  public getTrendingReviews(amount: number = 5): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:1337/review/trending?take=' + amount);
  }

  public reviewAlbum(albumId: string, title: string, body: string): Observable<Review> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.authToken,
    });

    return this.http.post<Review>(
      'http://localhost:1337/review/review',
      {
        album: albumId,
        title: title,
        body: body,
      },
      {headers: headers}
    );
  }

  public deleteAuthUserReview(albumId: string): Observable<Review> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.authToken,
    });
    return this.http.delete<Review>('http://localhost:1337/review/my/' + albumId, {headers: headers});
  }
}
