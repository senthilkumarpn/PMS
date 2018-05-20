import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class HttpInterceptorForJWTService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    debugger;
    console.log("Http Interceptor being used");
    var token = localStorage.getItem("auth_token");
    if(token && token !== "undefined"){
      var tokendata = JSON.parse(token).access_token;
      req = req.clone({setHeaders:{
        Authorization: `Bearer ${token}`,
        AccessControlAllowOrigin:"*" 
      }});
    }
    return next.handle(req);
  }
}
