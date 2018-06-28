import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../../services/search/search.service';
import { Memes } from '../../../models/memes.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subcription: Subscription;
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
    public _searchService: SearchService
  ) { }

  ngOnInit() {
    console.log('init');
    this._searchService.changeTranding();

  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }


}
