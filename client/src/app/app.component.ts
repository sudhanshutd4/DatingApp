import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{ User } from '../app/_models/user';
import {AccountService} from '../app/_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private accountService: AccountService){}

  ngOnInit(){
     //this.getusers();
     this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    //console.log(user.username);
    if(user.username === undefined)
    this.accountService.setCurrentUser(null);
    else
    this.accountService.setCurrentUser(user);
  }

  // getusers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users=response;
  //   },error => {
  //     console.log(error); 
  //   })     
  //}
}
