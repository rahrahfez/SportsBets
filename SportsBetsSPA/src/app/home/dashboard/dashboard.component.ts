import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { MockDatabaseService } from 'src/Services/mock-database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['createdBy', 'condition', 'amount', 'accept'];
  dsWagers: any;

  constructor(private wagerService: MockDatabaseService) { }

  ngOnInit() {
    this.wagerService.getAllWagers()
      .pipe(map(res => this.dsWagers = res))
      .subscribe();
  }
}
