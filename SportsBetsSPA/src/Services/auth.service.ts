import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from 'src/Models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(this.url + 'login', credentials).pipe(
      map((response: any) => {
        const res = response;
        if (res) {
          localStorage.setItem('token', res.token);
          console.log(res);
        }
      })
    );
  }
}
