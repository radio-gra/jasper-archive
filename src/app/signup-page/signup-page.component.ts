import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass'],
})
export class SignupPageComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted: boolean = false;
  public duplicateEmail: boolean = false;
  public duplicateUsername: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.email], Validators.maxLength(128)],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(128)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(128)]],
    });
    this.signupForm.setValidators([this.checkPasswordMatching]);
  }

  public ngOnInit(): void {}

  public submit(): void {
    this.submitted = true;
    this.duplicateUsername = this.duplicateEmail = false;
    this.signupForm.markAsPristine();
    if (this.signupForm.invalid) {
      return;
    }

    const newUser: User = {
      username: this.signupForm.get('username').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value,
    };

    this.authService.checkUserUniqueness(newUser).subscribe((data: Array<any>) => {
      if (data[0].unique === true && data[1].unique === true) {
        this.authService.registerUser(newUser).subscribe((res: any) => {
          this.router.navigate(['/login']);
        });
      } else {
        if (data[0].unique === false) {
          this.duplicateUsername = true;
        }
        if (data[1].unique === false) {
          this.duplicateEmail = true;
        }
      }
    });
  }

  public get passwordsMatch(): boolean {
    return !(this.signupForm.errors && this.signupForm.errors.passwordsDontMatch);
  }
  public checkPasswordMatching: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password: AbstractControl = control.get('password');
    const passwordRepeat: AbstractControl = control.get('passwordRepeat');
    return password && passwordRepeat && password.value === passwordRepeat.value ? null : {passwordsDontMatch: true};
  };
}
