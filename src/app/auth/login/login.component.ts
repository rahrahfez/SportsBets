import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { RegisterComponent } from '../register-modal/register.component';
import { RepositoryService } from 'src/Services/repository.service';

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
    private repository: RepositoryService
  ) {}

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

    this.repository.post('account/login', credentials);
  }

  openRegistrationForm() {
    this.registrationFormRef = this.dialog.open(RegisterComponent);
  }
}
