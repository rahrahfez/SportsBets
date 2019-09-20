import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['createdBy', 'condition', 'amount', 'accept'];
  dsWagers: any;

  constructor() { }

  ngOnInit() {}
}
