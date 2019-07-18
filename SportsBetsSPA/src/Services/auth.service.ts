import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  public getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(credentials: any) {
    return this.http.post(this.url + 'login', credentials).pipe(
      map((response: any) => {
        const res = response;
        if (res) {
          // localStorage.setItem('token', res.Token);
        }
      })
    );
  }
}
