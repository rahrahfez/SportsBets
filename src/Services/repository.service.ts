import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  readonly url = 'http://localhost:5000/api/';
  // readonly url = 'https://60199daffa0b1f0017acd62f.mockapi.io';

  constructor(private http: HttpClient) {}

  getData(endpoint: string) {
    return this.http.get(this.url + endpoint);
  }
  create(endpoint: string, body: any) {
    return this.http.post(this.url + endpoint, body, this.generateHeaders());
  }
  getDataById(endpoint: string, id: string) {
    return this.http.get(this.url +  endpoint + '/' + id);
  }
  generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Response-Type': 'json'})
    };
  }
}
