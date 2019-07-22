import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setTokenKey(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  getTokenKey(key: string): string {
    return localStorage.getItem(key);
  }
  removeTokenKey(key: string) {
    localStorage.removeItem(key);
  }
}
