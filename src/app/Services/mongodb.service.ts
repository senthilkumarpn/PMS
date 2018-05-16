import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions , Response} from '@angular/http';

import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  result: any;
  headers: any;
  options: RequestOptions;
  apiUrl : 'http://localhost:4300/api';
  constructor(private _http: Http, private httpClient: HttpClient) {
    this.headers = new Headers(
      {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    this.options = new RequestOptions({headers: this.headers});
   }

     /**
   * Gets the tenant details based on hostname
   * @param HostName 
   */
  getTenantByHostName(HostName: string): Observable<any[]> {
    return this._http.get(this.apiUrl + '/getTenantByHostName/'+ HostName).pipe(map((result: Response) => result.json()));
  }

}
