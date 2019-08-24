import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './token.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Logout } from 'src/app/auth/store/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private store: Store<AppState>) {}

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  login(credentials: any) {
    return this.http.post(this.url + 'login', credentials, { responseType: 'text' });
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
