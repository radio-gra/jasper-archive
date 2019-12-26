import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Artist} from '../models/artist.model';
import {Album} from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:1337/album');
  }

  public getTrendingAlbums(amount: number = 5): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:1337/album/trending?take=' + amount);
  }
}
