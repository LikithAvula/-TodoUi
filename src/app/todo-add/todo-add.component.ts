
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service';
import { UrlService } from '../service/url.service';
import { Todo } from '../todo-lists/todo-lists.component';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todo : Todo;
  id

  constructor(public authenticationService : AuthenticationService, private url :UrlService, private route :Router ) { }
  ngOnInit(): void {
    this.todo = new Todo(this.id,'',false,null,null)
  }

  addTask(){
    this.url.addTodo(this.authenticationService.getAuthenticatedUser(),this.todo).subscribe(
      Response =>{ console.log(Response)
        this.route.navigate(['todos'])
      }

    )

  }

}
