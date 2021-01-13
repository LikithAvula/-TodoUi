import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/auth/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn : boolean;
  constructor(public authenticationService : AuthenticationService) { }
  username = ''
  welcomeRoute = ''

  ngOnInit(): void {
    this.username = this.authenticationService.getAuthenticatedUser()
    this.welcomeRoute = 'welcome/'+this.username
  }

}
