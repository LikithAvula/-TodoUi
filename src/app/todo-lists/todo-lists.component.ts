import { Component, OnInit } from '@angular/core';
import{UrlService} from './../service/url.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service';


 export class Todo{
   constructor( public id:number , public taskName : string, public status : boolean , public targetDate:Date, public userName:String){

  }
}
@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {


  // todos = [new Todo(1,'learn to code', true, new Date()),
  //          new Todo(2,'play cricket', true, new Date()),
  //          new Todo(3,'learn angular', false, new Date())
  //         ]

  todos :Todo[];
  isValid = false;
  error = '';
  successMessage ='';
  user;
  isAdmin = true;

  constructor(private url : UrlService, private router : Router, private authenticationService : AuthenticationService  ){ }

  ngOnInit(): void {
    this.url.getuserAccount(this.authenticationService.getAuthenticatedUser()).subscribe(
      response => {
        this.user = response
        console.log("admin ? : " + this.user.role)
        if(this.user.role != 'admin'){
          this.isAdmin = false
        }
        console.log("is user admin : " + this.isAdmin)
      }
    )
    this.url.getTodos(this.authenticationService.getAuthenticatedUser()).subscribe(response =>this.handleSuccessFullResponse(response),
                                  error => this.handleUnsuccessFullResponse(error)
    );
  }

  handleSuccessFullResponse(response){
    this.todos = response;
  }
  handleUnsuccessFullResponse(error){
    this.isValid = true;
    this.error = "some error occured please contact support"
  }

  deleteTodo(id :number ){
    this.url.deleteTodo(id,this.authenticationService.getAuthenticatedUser()).subscribe(response =>{this.handleSuccessFullResponse(response),
    this.successMessage = `delete success for ${id}`
    },
    error => this.handleUnsuccessFullResponse(error));
  }

  editTodo(id){
    this.router.navigate(['edit',id])
  }
}
