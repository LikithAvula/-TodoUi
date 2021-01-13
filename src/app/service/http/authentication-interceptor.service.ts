import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    let encodedAuthenticationCredentials =  sessionStorage.getItem('token')

    // let username = 'likith'
    // let password = 'likith'
    // let encodedAuthenticationCredentials = 'Basic ' + window.btoa(username +':' + password);  
    
    if(encodedAuthenticationCredentials != null){
      req = req.clone({
        setHeaders : {
          Authorization : encodedAuthenticationCredentials
        }
      })
        
      console.log('token from interceptor : ' + encodedAuthenticationCredentials)
      
      return next.handle(req);
    }else{
      console.log('token from interceptor without cloneing header: ' + req.headers.get('Authorization'))
      req = req.clone()
      return next.handle(req)
    }
    
  }
}
