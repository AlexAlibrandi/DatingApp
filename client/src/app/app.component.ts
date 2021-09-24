import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//decorator to create an angular component
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Union';
  users: any;

  constructor(private http: HttpClient){}

  //required method when appcomponent implements Oninit
  ngOnInit(){
    this.getUsers();
    }

    //creating method to get users
    getUsers(){
      this.http.get('https://localhost:5001/api/users').subscribe(response => {
        this.users = response;
      }, error => {
        console.log(error)
      })
    }
  }
