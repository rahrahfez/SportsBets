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

  points$: Observable<number>;
  points: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.points = 0;
  }

  add() {
    this.points++;
  }

  subtract() {
    this.points--;
  }
}
