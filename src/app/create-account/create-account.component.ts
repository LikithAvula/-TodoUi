import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{UrlService} from './../service/url.service';


export class User{
  constructor(public userName: string, public password:string, public dateOfBirth:Date, public role: String ) { }
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  user : User;
  status = '';
  ifResponse = false

  constructor(private urlService : UrlService, private router:Router) { }

  ngOnInit(): void {
    this.user = new User(null,null,null,'user');
  }

  createNewAccount(){

    //this.user = new User(this.userName,this.password,this.dateOfBirth,this.role);

    this.urlService.createAccount(this.user).subscribe(
      response => {
        if(response != 'OK'){
          this.ifResponse = true
          this.status = 'not created'
        }else{
          console.log("response after creating new account : " + response)
          this.status = 'succesfully created'
          this.router.navigate(['login'])
        }
      }
    )
  }

}
