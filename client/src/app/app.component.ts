import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

//decorator to create an angular component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Union';
  users: any;

  constructor(private accountService: AccountService) {}

  //required method when appcomponent implements Oninit
  ngOnInit() {
    this.setCurrentUser();
  }

  //getting the user object from our local storage
  //setting that into our account service
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user)
  }
}
