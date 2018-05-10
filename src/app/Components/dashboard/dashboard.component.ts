import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count = [1,2,3,4,5,6,7,8,9,10,11,12];
  constructor() { }

  ngOnInit() {
  }

}
