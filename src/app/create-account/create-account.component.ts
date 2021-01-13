import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  username =''
  password=''
  dateOfBirth:Date
 
  constructor() { }

  ngOnInit(): void {
  }

  createNewAccount(event){
    console.log(this.username)
    console.log(this.password)
    console.log(this.dateOfBirth)
  }

}
