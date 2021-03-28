import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: boolean = false;
  //currentUser$ : Observable<User>;

  constructor(public accountService: AccountService , private router: Router,private toast:ToastrService) { }

  ngOnInit(): void {
    //this.currentUser$=this.accountService.currentuser$;
    //console.log(this.currentUser$);
  }

  login(){
    this.accountService.login(this.model).subscribe(response  => {
      console.log(response);
      this.router.navigateByUrl('/members');
      //this.loggedIn=true;
    }
    // ,error => {
    //   console.log(error);
    //   this.toast.error(error.error);
    // }
    )
  }

  logout(){
   this.accountService.logout();
   this.router.navigateByUrl('/');
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
