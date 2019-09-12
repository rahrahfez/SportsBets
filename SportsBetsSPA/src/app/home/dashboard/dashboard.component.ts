import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/Services/repository.service';
import { Wager } from 'src/Models/wager.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount', 'bettor', 'timeLeft'];
  dataSource: any;
  wagers$: any;

  constructor(private repo: RepositoryService) { }

  ngOnInit() {
    this.repo.getData('wagers')
      .subscribe((wager) => {

      });
  }

}
