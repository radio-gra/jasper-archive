import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Artist} from '../models/artist.model';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  public getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>('http://localhost:1337/artist');
  }

  public getTrendingArtists(amount: number = 5): Observable<Artist[]> {
    return this.http.get<Artist[]>('http://localhost:1337/artist/trending?take=' + amount);
  }
}
