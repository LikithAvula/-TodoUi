import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  authentication(username,password){
      let encodedAuthenticationCredentials = 'Bearer ' + window.btoa(username +':' + password);  
      let headers = new HttpHeaders({
        Authorization : encodedAuthenticationCredentials
        // username : 'in28minutes',
        // password : 'dummy'
         })  
  
         console.log('AuthenticationService headers : ' + headers)
         console.log('AuthenticationService.headers.get(encodedAuthenticationCredentials) : ' + headers.get('Authorization'))
         
      return this.http.get(`${API_URL}/authenticate`,{headers}).pipe(
        map(
          data =>{
          sessionStorage.setItem('token',encodedAuthenticationCredentials)
          sessionStorage.setItem('authenticatedUser',username)    
          console.log('inside map : ' + sessionStorage.getItem('token') )   
          return data
          }
        )
      )

      // return this.http.post(`${API_URL}/authenticate`,{headers}).pipe(
        
      //   map(
      //     data =>{
      //       console.log(data.valueOf)
      //     sessionStorage.setItem('token',encodedAuthenticationCredentials)
      //     sessionStorage.setItem('authenticatedUser',username)    
      //     console.log('inside map : ' + sessionStorage.getItem('token') )   
      //     return data
      //     }
      //   )
      
      // )

    }

    isUserLoggedIn(){
      let username = sessionStorage.getItem('authenticatedUser');
      return !(username === null)
    }
  
    logout(){
      sessionStorage.removeItem('authenticatedUser')
      sessionStorage.removeItem('token')
    }
  
    getAuthenticatedUser(){
      return sessionStorage.getItem('authenticatedUser');
    }
  
    getAuthenticatedToken(){
      if(sessionStorage.getItem('authenticatedUser') != null)
        return sessionStorage.getItem('token');
    }
}
