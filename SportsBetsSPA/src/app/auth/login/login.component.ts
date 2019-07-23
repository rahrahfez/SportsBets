import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { RegisterComponent } from '../register/register.component';
import { AuthService } from 'src/Services/auth.service';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Login } from 'src/Auth/store/auth.action';
import { User } from 'src/Models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registrationFormRef: MatDialogRef<RegisterComponent>;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private authService: AuthService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: this.fb.control(''),
      Password: this.fb.control('')
    });
  }

  onLogin() {
    const payload = {
      Username: this.loginForm.controls.Username.value,
      Password: this.loginForm.controls.Password.value
    };
    this.store.dispatch(new Login(payload.Username));
    this.authService.login(payload).subscribe();
  }

  openRegistrationForm() {
    this.registrationFormRef = this.dialog.open(RegisterComponent);
  }
}
