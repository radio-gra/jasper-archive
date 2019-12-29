import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {UserMinimal} from '../models/user-minimal';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  public authToken: string = null;
  public user: {username: string} = null; //temporary

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    if (localStorage.getItem('id_token')) {
      this.authToken = localStorage.getItem('id_token');
    }
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  public registerUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:1337/user/new', user);
  }

  public authorizeUser(user: UserMinimal): Observable<any> {
    return this.http.post<any>('http://localhost:1337/user/auth', user);
  }

  public checkUserUniqueness(user: User): Observable<any> {
    return forkJoin(
      this.http.post<any>('http://localhost:1337/user/checkusername', user),
      this.http.post<any>('http://localhost:1337/user/checkemail', user)
    );
  }

  public getUserInfo(): Observable<User> {
    this.loadToken();
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authToken,
    });
    return this.http.get<User>('http://localhost:1337/user/verify', {headers: headers});
  }

  public saveToLocalStorage(data: {token: string; user: any}): void {
    if (data.token) {
      localStorage.setItem('id_token', data.token.slice(7));
      this.authToken = data.token.slice(7);
    }
    if (data.user) {
      localStorage.setItem('user', JSON.stringify(data.user));
      this.user = data.user;
    }
  }

  public logout(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    if (!this.authToken) {
      this.loadToken();
    }
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return !new JwtHelperService().isTokenExpired(this.authToken);
  }

  private loadToken(): void {
    this.authToken = localStorage.getItem('id_token');
  }
}
