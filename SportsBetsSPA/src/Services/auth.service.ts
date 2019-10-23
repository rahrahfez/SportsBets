import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './token.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Logout } from 'src/app/auth/store/auth.action';
import { mapTo, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private store: Store<AppState>) {}

  isLoggedIn(): boolean {
    return this.tokenService.isTokenExpired();
  }

  login(credentials: any) {
    return this.http.post(this.url + 'login', credentials, { responseType: 'text' }).pipe(
      tap((token: string) => this.tokenService.setTokenKey('token', token))
    );
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
