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

  public getAlbumById(id: string): Observable<Album> {
    return this.http.get<Album>('http://localhost:1337/album/' + id);
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:1337/album');
  }

  public getChart(amount: number = 5): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:1337/album/chart?take=' + amount);
  }

  public getTrendingAlbums(amount: number = 5): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:1337/album/trending?take=' + amount);
  }

  public getAlbumsForArtist(artistId: string): Observable<Album[]> {
    return this.http.get<Album[]>('http://localhost:1337/album/forartist/' + artistId);
  }

  public searchAlbum(query: string, type: string): Observable<Album[]> {
    if (type === 'name') {
      return this.http.get<Album[]>('http://localhost:1337/album/where?name=' + query);
    } else if (type === 'artist') {
      return this.http.get<Album[]>('http://localhost:1337/album/where?artist=' + query);
    } else {
      return new Observable<Album[]>(); // there has to be a smarter way about it
    }
  }
}
