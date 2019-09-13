import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Logout } from 'src/app/auth/store/auth.action';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
}
