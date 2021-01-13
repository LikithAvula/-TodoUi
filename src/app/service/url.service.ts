import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from '../todo-lists/todo-lists.component';
import { API_URL } from 'src/app/app.constants'


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient ) { }

  getTodos(username){
   
    // console.log('auth from manual request header  : ' +headers.get('Authorization'))
    return this.http.get<Todo[]>(`${API_URL}/all/${username}`);
  }

  getTodo(id : number, userName:String){
    return this.http.get<Todo>(`${API_URL}/${userName}/${id}`);
  }

  deleteTodo(id:number,userName:string){
    return this.http.delete(`${API_URL}/delete/${userName}/${id}`)
  }

  updateTodo(id,username,todo){
    return this.http.put(`${API_URL}/edit/${username}/${id}`,todo)
  }

  addTodo(username,todo){
    return this.http.post(`${API_URL}/add/${username}`,todo)
  }

  // getAuthentication() {
  //   let username = 'likith'
  //   let password = 'likith'
  //   let encodedAuthenticationCredentials = 'Basic ' + window.btoa(username +':' + password);
    
  //   console.log(encodedAuthenticationCredentials)

  //   let headers = new HttpHeaders({
  //   Authorization : encodedAuthenticationCredentials
  //    })
    
  //   return headers
  // }
  
}
