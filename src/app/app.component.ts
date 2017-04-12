import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Blog app with Rails Back end';
  showLogout:boolean;

  constructor(private route:Router, userService: UserService ){
    this.showLogout = userService.isLoggedIn();
    console.log(this.showLogout);
  }

  logout(event){
    localStorage.removeItem("token");
    this.route.navigate(["/"]);
    event.preventDefault();
  }
}
