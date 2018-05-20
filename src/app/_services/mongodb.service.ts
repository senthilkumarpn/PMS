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
  apiUrl:any;
  mongoAPIUrl:any;
  constructor(private _http: Http, private httpClient: HttpClient) {
    this.apiUrl= 'http://localhost:3000/api';
    this.mongoAPIUrl='http://localhost:3000/mongodb';
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
  getUsers():Observable<any[]>{
    return this._http.get(this.apiUrl + '/users').pipe(map((result)=>result.json()));
  }
  login(username:string,password:string):Observable<any>{
    debugger;
    let body = JSON.stringify({name:username,password:password});
    return this._http.post(this.apiUrl+"/login",body,this.options).pipe(map((result) => result.json()));
  }
  authenticate(username:string,password:string):Observable<any>{
    let body = JSON.stringify({name:username,password:password});
    return this._http.post(this.apiUrl+"/authenticate",body,this.options).pipe(map((result) => result.json()));
  }
  getProducts(): Observable<any>{
    return this._http.get(this.mongoAPIUrl + '/Products').pipe(map((result) => result.json()));
  }
}
