import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  img: any = [
{ id: 0, name: 'Doge Dog'}
, { id: 1, name: 'Grumpy Cat'}
, { id: 2, name: 'Nick Young'}
, { id: 3, name: 'Sad Frog'}
, { id: 4, name: 'Success Kid'}
, { id: 0, name: 'Doge Dog'}
, { id: 1, name: 'Grumpy Cat'}
, { id: 2, name: 'Nick Young'}
, { id: 3, name: 'Sad Frog'}
, { id: 4, name: 'Success Kid'}
];
  constructor(
  ) { }

  ngOnInit() {
  }

}
