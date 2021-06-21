import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';

import { RegisterComponent } from '../register-modal/register.component';
import { AuthService } from 'src/Services/auth.service';
import { AppState } from '../../store/app.state';
import { Login } from '../store/auth.action';
import { TokenService } from 'src/Services/token.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registrationFormRef: MatDialogRef<RegisterComponent>;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private authService: AuthService,
    private store: Store<AppState>,
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: this.fb.control('', Validators.required),
      Password: this.fb.control('', Validators.required)
    });
  }

  // onLogin() {
  //   const credentials = {
  //     Username: this.loginForm.controls.Username.value,
  //     Password: this.loginForm.controls.Password.value
  //   };
  //   this.authService.login(credentials)
  //     .pipe(
  //       tap(() =>
  //         this.store.dispatch(new Login()))
  //     )
  //     .subscribe(() => {},
  //     err => {
  //       console.log(err);
  //     });
  // }

onLogin() {
  const credentials = {
    Username: this.loginForm.controls.Username.value,
    Password: this.loginForm.controls.Password.value
  };
  this.http.post("http://localhost:5000/api/account/login", credentials, {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).pipe(
    map(res => res as User)
  );
  console.log("login clicked");
}

  openRegistrationForm() {
    this.registrationFormRef = this.dialog.open(RegisterComponent);
  }
}
