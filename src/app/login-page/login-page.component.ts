import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {UserMinimal} from '../models/user-minimal';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean = false;
  public authFailed: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public ngOnInit(): void {}

  public submit(): void {
    this.submitted = true;
    this.authFailed = false;
    this.loginForm.markAsPristine();
    if (this.loginForm.invalid) {
      return;
    }

    const user: UserMinimal = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    };

    this.authService.authorizeUser(user).subscribe((response: any) => {
      if (response.token) {
        this.authService.saveToLocalStorage({token: response.token, user: response.user});
        this.router.navigate(['/']);
      } else {
        this.authFailed = true;
      }
    });
  }
}
