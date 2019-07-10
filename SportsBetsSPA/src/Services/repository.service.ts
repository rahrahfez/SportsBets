import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepositoryService {
  readonly url = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  public getData(endpoint: string) {
    return this.http.get(this.url + endpoint);
  }
}
