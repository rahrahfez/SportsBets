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
    this.router.navigate(['home']);
  }
  toView() {
    this.router.navigate(['select'], { relativeTo: this.route });
  }
  toCreate() {
    this.router.navigate(['wagers'], { relativeTo: this.route });
  }
}
