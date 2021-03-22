import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { AccountService} from '../_services/account.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model : any = {};
  //@Input() usersforcomponentreigister : any;
  @Output() cancelRegister = new EventEmitter();

  
  constructor(private accountservice : AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountservice.register(this.model).subscribe(response => {
      //console.log(response);
      this.cancel();
    },error =>{
      console.log(error);
    });
    
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
