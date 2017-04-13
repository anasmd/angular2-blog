
import { CanActivate } from "@angular/router";
import { UserService } from "./user/user.service";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){}
  canActivate(){
    let isLoggedIn = this.userService.isLoggedIn();
    if(!isLoggedIn) {
      this.router.navigate(["/"]);
    } else {
      return isLoggedIn;
    }
  }
}
