import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  backendData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchBackendData();
  }

  fetchBackendData() {
    this.http.get('/health').subscribe(
      data => {
        this.backendData = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
