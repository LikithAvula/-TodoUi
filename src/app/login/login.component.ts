import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from './../service/auth/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  error='invalid credentials'
  invalid = false;
  constructor(private router : Router ,
    private authService : AuthenticationService ) { }

  ngOnInit(): void {
  }

  // handlelogin(event){
  //   if(this.basicAuthService.authentication(this.username,this.password)){
  //     this.router.navigate(['welcome',this.username])
  //     this.invalid = false
  //   }else{
  //     this.invalid=true
  //   }
  // }

  
  handlelogin(event){
    this.authService.authentication(this.username,this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalid = false
      },
      error =>{
        console.log(error)
        this.invalid=true
      }
    )
  }

}
