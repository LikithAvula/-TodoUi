import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn : boolean;
  constructor(public authenticationService : AuthenticationService, public router:Router) { }
  username = ''
  welcomeRoute = ''
  profileRoute = ''

  ngOnInit(): void {
    this.username = this.authenticationService.getAuthenticatedUser()
    this.welcomeRoute = 'welcome/'+this.username

    console.log('profile route : ' + this.profileRoute)
    console.log('welcome route : ' + this.welcomeRoute)
    console.log('userName : ' + this.username)
  }

  profile(event){
    this.username = this.authenticationService.getAuthenticatedUser()
    this.profileRoute = 'profile/'+ this.username
    console.log('userName : ' + this.username)
    console.log("profile route : " + this.profileRoute)
    this.router.navigate([this.profileRoute])
  }

}
