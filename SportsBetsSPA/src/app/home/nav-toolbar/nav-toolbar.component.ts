import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toDashboard() {
    this.router.navigate(['dashboard']);
  }
  toView() {
    this.router.navigate(['view'], { relativeTo: this.route });
  }
  toCreate() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
