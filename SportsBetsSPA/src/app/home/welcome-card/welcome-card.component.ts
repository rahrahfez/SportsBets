import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromAuthState from '../../auth/store/auth.selector';
import * as fromUserState from 'src/app/home/store/home.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { RepositoryService } from 'src/Services/repository.service';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent implements OnInit {
  availableBalance: number;
  username$: Observable<string>;
  availableBalance$: any;

  constructor(private store: Store<AppState>, private repo: RepositoryService) { }

  ngOnInit() {
    this.username$ = this.store.select(fromUserState.selectUsername);
    this.availableBalance$ = this.repo.getData('users/45a7bdeb-f307-4371-9d12-6db987509a47/availablebalance');
  }
}
