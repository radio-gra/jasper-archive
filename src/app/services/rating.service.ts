import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Rating} from '../models/rating.model';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  public getRatingsForAlbum(albumId: string): Observable<Rating[]> {
    return this.http.get<Rating[]>('http://localhost:1337/rating/foralbum/' + albumId);
  }

  public deleteRating(ratingId: string): Observable<Rating> {
    return this.http.delete<Rating>('http://localhost:1337/rating/' + ratingId);
  }

  public getAuthUserRatingForAlbum(albumId: string): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.authToken,
    });
    return this.http.get<Rating>('http://localhost:1337/rating/my/' + albumId, {headers: headers});
  }

  public rateAlbum(albumId: string, value: number): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.authToken,
    });

    return this.http.post<Rating>(
      'http://localhost:1337/rating/rate',
      {album: albumId, value: value},
      {headers: headers}
    );
  }

  public deleteAuthUserRating(albumId: string): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.authToken,
    });
    return this.http.delete<Rating>('http://localhost:1337/rating/my/' + albumId, {headers: headers});
  }
}
