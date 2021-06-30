import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
  FormGroupDirective
} from '@angular/forms';
import { RepositoryService } from 'src/app/services/repository.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  matcher = new CrossFieldErrorMatcher();

  constructor(
    private fb: FormBuilder,
    private repository: RepositoryService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  passwordValidator(form: FormGroup) {
    const condition = form.get('Password').value !== form.get('PasswordConfirmation').value;
    return condition ? { passwordsDoNotMatch: true } : null;
  }

  initForm() {
    this.registrationForm = this.fb.group({
      Username: this.fb.control('', Validators.required),
      Password: this.fb.control('', Validators.required),
      PasswordConfirmation: this.fb.control('', Validators.required)
    }, {
      validator: this.passwordValidator
    });
  }

  registrationSuccessSnackbar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  onSubmitForm() {
    this.repository.post('account/register', this.registrationForm.value)
      .subscribe();
    this.registrationSuccessSnackbar('Registration successful.');
  }
}



