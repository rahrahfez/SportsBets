import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/user.model';
import { RepositoryService } from 'src/Services/repository.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
  users$: Observable<any>;

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.users$ = this.repository.getData('users');
  }

}
