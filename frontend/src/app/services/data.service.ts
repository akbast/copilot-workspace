import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private backendUrl = 'http://localhost:3000'; // URL to web api

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get(this.backendUrl);
  }
}
