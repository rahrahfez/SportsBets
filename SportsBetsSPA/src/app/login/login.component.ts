import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registrationFormRef: MatDialogRef<RegisterComponent>;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: this.fb.control(''),
      Password: this.fb.control('')
    });
  }

  onLogin() {
    this.router.navigate(['_/dashboard']);
  }

  openRegistrationForm() {
    this.registrationFormRef = this.dialog.open(RegisterComponent);
  }
}
