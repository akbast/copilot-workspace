import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.fetchData().subscribe({
      next: (data) => this.data = data,
      error: (error) => console.error('There was an error!', error)
    });
  }
}
