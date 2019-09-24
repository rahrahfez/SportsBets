import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwt: JwtHelperService) { }

  getDecodedToken(token: string) {
    try {
      return this.jwt.decodeToken(token);
    } catch (Error) {
      console.log(Error);
      return null;
    }
  }

  setTokenKey(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getTokenKey(key: string): string {
    return localStorage.getItem(key);
  }

  removeTokenKey(key: string) {
    localStorage.removeItem(key);
  }

  isAuthenticated(): boolean {
    const token = this.getTokenKey('token');
    return !this.jwt.isTokenExpired(token);
  }
}
