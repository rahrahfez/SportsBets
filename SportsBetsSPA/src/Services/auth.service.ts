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
              public tokenService: TokenService) {}

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  login(credentials: any) {
    return this.http.post(this.url + 'login', credentials, { responseType: 'text' });
  }
}
