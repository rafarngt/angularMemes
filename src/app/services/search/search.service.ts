import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProxyService } from '../proxy.service';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
    , private _proxyService: ProxyService,
  ) { }

  public trending(param ): Observable<any> {
    const params = new HttpParams()
    .set('api_key', environment.apiKey )
    .set('limit', param.limit  );
    return this.http.get(this._proxyService.searchUrl , { params: params});
  }
  public search(param ): Observable<any> {
    const params = new HttpParams()
    .set('q', param.search  )
    .set('api_key',  environment.apiKey)
    .set('limit', environment.limit );
    return this.http.get(this._proxyService.searchUrl , { params: params});
  }

}
