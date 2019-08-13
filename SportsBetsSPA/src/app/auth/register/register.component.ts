import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { RepositoryService } from 'src/Services/repository.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private repository: RepositoryService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
        Username: this.fb.control(''),
        Password: this.fb.control(''),
        PasswordConfirmation: this.fb.control('')
      });
  }

  onSubmitForm() {
    this.repository.create('users', this.registrationForm.value).subscribe();
  }
}
