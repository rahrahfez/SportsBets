import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { first, map } from 'rxjs/operators';

import { RegisterComponent } from '../register-modal/register.component';
import { RepositoryService } from 'src/app/services/repository.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registrationFormRef: MatDialogRef<RegisterComponent>;
  isAuthenticated: Boolean;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private repository: RepositoryService,
    private router: Router
  ) 
  {
    this.isAuthenticated = false;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: this.fb.control('', Validators.required),
      Password: this.fb.control('', Validators.required)
    });
  }

  onLogin() {
    const credentials = {
      Username: this.loginForm.controls.Username.value, 
      Password: this.loginForm.controls.Password.value
    };

    this.repository.post('account/authenticate', credentials)
      .subscribe((res: any) => {
        this.isAuthenticated = true;
        const token = res;
        localStorage.setItem("token", token);
        console.log(token);
        this.router.navigate(['/']);
      }, err => {
        this.isAuthenticated = false;
        console.log(err);
      });
  }

  openRegistrationForm() {
    this.registrationFormRef = this.dialog.open(RegisterComponent);
  }
}
