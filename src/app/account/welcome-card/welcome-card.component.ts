import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent implements OnInit {
  availableBalance: number;
  username$: Observable<string>;
  username: string;
  availableBalance$: any;

  constructor() { }

  ngOnInit() {
  }
}
