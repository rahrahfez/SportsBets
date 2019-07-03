import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SportsBets-SPA';

  owner$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.owner$ = this.http.get('http://localhost:5000/api/owner');
  }
}
