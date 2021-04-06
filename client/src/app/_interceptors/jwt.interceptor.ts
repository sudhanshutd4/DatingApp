import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountservice:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentuser : User;
    this.accountservice.currentuser$.pipe(take(1)).subscribe(user => currentuser = user);
    if(currentuser){
      request=request.clone({
        setHeaders:{
          Authorization:`Bearer ${currentuser.token}`
        }
      })
    }


    return next.handle(request);
  }
}
