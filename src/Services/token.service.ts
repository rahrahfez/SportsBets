import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/Models/user.model';

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

  getUsernameFromToken(): string {
    const token = this.getTokenKey((this.getDecodedToken('token')));
    return token['unique_name'];
  }

  removeTokenKey(key: string) {
    localStorage.removeItem(key);
  }

  isTokenExpired(): boolean {
    return !this.jwt.isTokenExpired(this.getTokenKey('token'));
  }
}
