import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer) {
   }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  onSignUp() {
    this.router.navigate(['login']);
  }
}
