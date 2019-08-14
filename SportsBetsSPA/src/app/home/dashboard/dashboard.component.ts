import { Component, OnInit } from '@angular/core';

export interface Wager {
  date: Date;
  amount: number;
  bettor: string;
}

const WAGER_DATA: Wager[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount', 'bettor', 'timeLeft'];
  dataSource = WAGER_DATA;

  constructor() { }

  ngOnInit() {
  }

}
