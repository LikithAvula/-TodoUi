import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from './../service/auth/authentication.service'


export class Login{
  constructor(public userName : string  , public password : string  ){

  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  error='invalid credentials'
  invalid = false;
  login : Login;
  constructor(private router : Router ,
    private authService : AuthenticationService ) { }

  ngOnInit(): void {
    this.login = new Login(null,null);
  }

  // handlelogin(event){
  //   if(this.basicAuthService.authentication(this.username,this.password)){
  //     this.router.navigate(['welcome',this.username])
  //     this.invalid = false
  //   }else{
  //     this.invalid=true
  //   }
  // }


  // handlelogin(event){
  //   this.authService.basicAuthentication(this.username,this.password).subscribe(
  //     data => {
  //       console.log(data)
  //       this.router.navigate(['welcome',this.username])
  //       this.invalid = false
  //     },
  //     error =>{
  //       console.log(error)
  //       this.invalid=true
  //     }
  //   )
  // }


  JWTHandlelogin(){
    this.authService.JWTAuthentication(this.login.userName,this.login.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.login.userName])
        this.invalid = false
      },
      error =>{
        console.log(error)
        this.invalid=true
      }
    )
  }

}
