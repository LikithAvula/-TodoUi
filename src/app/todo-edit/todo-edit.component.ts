import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service';
import { UrlService } from '../service/url.service';
import { Todo } from '../todo-lists/todo-lists.component';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(public authenticationService : AuthenticationService,private activatedRoute : ActivatedRoute, private url : UrlService, private route : Router ) { }

  id;
  userName ='';
  todo : Todo

  ngOnInit(): void {
    this.id =  this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(1,'',false,null);
    this.url.getTodo(this.id,this.authenticationService.getAuthenticatedUser()).subscribe(
      response => this.todo =  response
    )
  }

  editTodo(){
    console.log("before update")
    console.log(this.todo)
    this.url.updateTodo(this.id,this.authenticationService.getAuthenticatedUser(),this.todo).subscribe(
      response => {
        console.log("after update")
        console.log(this.todo)
        this.route.navigate(['todos'])
      }

    )
    

  }

}
