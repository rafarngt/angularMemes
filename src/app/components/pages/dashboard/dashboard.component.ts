import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search/search.service';
import { Memes } from '../../../models/memes.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  memes: Memes[];
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
    private _searchService: SearchService
  ) { }

  ngOnInit() {
    this.changeTranding();
  }

  changeTranding() {
    this._searchService.trending().subscribe(response => {
      console.log(response);
      this.memes = response;

    });
  }

}
