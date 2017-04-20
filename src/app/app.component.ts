import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "./user/user.service";
import { Observable } from "rxjs";
import { MessageService } from "./message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Blog app with Rails Back end';
  showLogout:boolean;
  message:String="";



  constructor(private route:Router, private userService: UserService, private msg: MessageService ){
    userService.isLoginSubject.subscribe( data => this.showLogout = data);
    msg.pop().subscribe( m => this.message = m);
  }



  logout(event){
    this.msg.push("Logged out Successfully");
    this.userService.isLoginSubject.next(false);
    localStorage.removeItem("token");
    this.route.navigate(["/"]);
    event.preventDefault();
  }
}
