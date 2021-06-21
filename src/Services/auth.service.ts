import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './token.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Logout } from 'src/app/auth/store/auth.action';
import { mapTo, catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/models/user.model';
import { Adapter } from 'src/app/core/adapter';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:5000/api/account/';

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private store: Store<AppState>) {}

  isLoggedIn(): boolean {
    return this.tokenService.isTokenExpired();
  }

  // login(credentials: any) {
  //   return this.http.post(this.url + 'login', credentials, { responseType: 'json' })
  //     .pipe(
  //       map((res: any) => res.map((item: any) => this.adapter.adapt(item)))
  //   );
  // }

  logout() {
    this.store.dispatch(new Logout());
  }
}
