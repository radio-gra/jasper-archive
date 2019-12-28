import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {}

  public get username(): string {
    if (this.authService.isLoggedIn()) {
      return this.authService.user.username;
    }
    return null;
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
