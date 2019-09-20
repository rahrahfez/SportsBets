import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromState from '../../auth/store/auth.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent implements OnInit {
  availableBalance: number;
  username$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.username$ = this.store.select(fromState.selectUsername);
  }
}
