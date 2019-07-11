import { Component, OnInit } from '@angular/core';

export interface Wager {
  date: string;
  amount: number;
  bettor: string;
  timeLeft: string;
}

const WAGER_DATA: Wager[] = [
  { date: '05/28/18', amount: 50, bettor: 'Cohh', timeLeft: '5 mins' },
  { date: '05/28/18', amount: 60, bettor: 'Stan', timeLeft: '12 mins' },
  { date: '05/28/18', amount: 10, bettor: 'Whis', timeLeft: '15 mins' }
];

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
