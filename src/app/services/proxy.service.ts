import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ProxyService {
  private _baseUrl = environment.baseUrl;
  constructor() { }
  get searchUrl() {
    return this._baseUrl + 'search';
  }

  get trending() {
    return this._baseUrl + 'trending';
   }

}
