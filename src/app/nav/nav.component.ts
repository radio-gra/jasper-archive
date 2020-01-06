import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {}

  public get username(): string {
    if (this.authService.isLoggedIn()) {
      return this.authService.user.username;
    }
    return null;
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
