import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { RegisterComponent } from '../register/register.component';
import { AuthService } from 'src/Services/auth.service';
import { AppState } from '../../store/app.state';
import { Login } from '../store/auth.action';
import { User } from '../../../Models/user.model';

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
      Username: this.fb.control('', Validators.required),
      Password: this.fb.control('', Validators.required)
    });
  }

  onLogin() {
    const payload = {
      Username: this.loginForm.controls.Username.value,
      Password: this.loginForm.controls.Password.value
    };
    this.authService.login(payload)
      .subscribe((user: User) => {
        this.store.dispatch(new Login({ user }));
      },
      err => {
        console.log(err);
      });
  }

  openRegistrationForm() {
    this.registrationFormRef = this.dialog.open(RegisterComponent);
  }
}
