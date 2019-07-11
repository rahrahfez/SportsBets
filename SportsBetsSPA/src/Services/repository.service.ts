import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RepositoryService {
  readonly url = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  public getData(endpoint: string) {
    return this.http.get(this.url + endpoint);
  }
  public create(endpoint: string, body: any) {
    return this.http.post(this.url + endpoint, body, this.generateHeaders());
  }
  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
}
