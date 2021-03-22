import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: boolean = false;
  //currentUser$ : Observable<User>;

  constructor(public accountService: AccountService ) { }

  ngOnInit(): void {
    //this.currentUser$=this.accountService.currentuser$;
    //console.log(this.currentUser$);
  }

  login(){
    this.accountService.login(this.model).subscribe(response  => {
      console.log(response);
      //this.loggedIn=true;
    },error => {
      console.log(error);
    })
  }

  logout(){
   this.accountService.logout();
    //this.loggedIn=false;
    
  }

  // getCurrentUser(){
  //   this.accountService.currentuser$.subscribe(user =>
  //     {
  //       console.log(typeof user);
  //       if(user.username == null){
  //         this.loggedIn=false;
  //       }        
  //       else
  //       {
  //         this.loggedIn=true;
  //       }
        

  //      //this.loggedIn=!!user;
  //       console.log(this.loggedIn);
          
  //     },error =>{
  //        console.log(error);
  //     }
  //   )
  // }
  
}
