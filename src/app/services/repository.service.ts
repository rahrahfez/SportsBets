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
  post(endpoint: string, body: any) {
    return this.http.post(this.url + endpoint, body, { responseType: 'text' });
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
