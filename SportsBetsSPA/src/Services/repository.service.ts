import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  readonly url = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  getData(endpoint: string) {
    return this.http.get(this.url + endpoint);
  }
  create(endpoint: string, body: any) {
    return this.http.post(this.url + endpoint, body, this.generateHeaders());
  }
  generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
}
