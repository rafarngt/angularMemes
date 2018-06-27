import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProxyService } from '../proxy.service';
import { environment } from '../../../environments/environment';
import { Memes } from '../../models/memes.model';


@Injectable()
export class SearchService {
  memes: Memes[];
  constructor(private http: HttpClient, private _proxyService: ProxyService) {}

  public trending() {
    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('limit', environment.limit);
    return this.http
      .get(this._proxyService.trending, { params: params })
       .pipe(
          map( (resp: any) => this.memes = resp.data
       ));
  }

  public search(param): Observable<any> {
    const params = new HttpParams()
      .set('q', param.search)
      .set('api_key', environment.apiKey)
      .set('limit', environment.limit);
    return this.http.get(this._proxyService.searchUrl, { params: params });
  }
}
