import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient,
              public jwtHelper: JwtHelperService,
              public tokenService: TokenService) {}

  public getToken(): string {
    return this.tokenService.getTokenKey('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(credentials: any) {
    return this.http.post(this.url + 'login', credentials);
  }
}
