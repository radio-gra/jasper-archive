import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:1337/user/new', user);
  }

  public checkUserUniqueness(user: User): Observable<any> {
    return forkJoin(
      this.http.post<any>('http://localhost:1337/user/checkusername', user),
      this.http.post<any>('http://localhost:1337/user/checkemail', user)
    );
  }
}
