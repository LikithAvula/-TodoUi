import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../create-account/create-account.component';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private url : UrlService) { }
  userName = ''
  user : User

  ngOnInit(): void {

    this.userName = this.activatedRoute.snapshot.params['username']
    this.url.getuserAccount(this.userName).subscribe(
      data =>{
        this.user = data
        console.log('username : ' + this.user.userName)
        console.log('DOB : ' + this.user.dateOfBirth)
      }
    )

  }

}
