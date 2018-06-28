import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Memes } from '../../../models/memes.model';
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subcription: Subscription;
  inputSearch: FormControl =  new FormControl();
  memes: Memes;
  constructor(private _searchService: SearchService) {
   }

  ngOnInit() {
    this.startFilter();
  }

  startFilter() {
    this.inputSearch.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
  ).subscribe(search => {
    console.log('search', search);
    if ( search === '') {
      this._searchService.changeTranding();
    } else {
      this.inputSearch.setValue(search.trim().toLowerCase());
      this._searchService.changeSearch(this.inputSearch.value);
    }
        });
  }



}
