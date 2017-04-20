import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from "rxjs";


@Injectable()
export class UserService {

  serviceUrl = "http://localhost:3003/"; //"https://dry-taiga-18497.herokuapp.com/";
  isLoginSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: Http) {
    this.isLoginSubject.next(false);
  }

  authenticate(email:string, password: string){
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    let url = this.serviceUrl + "authenticate";
    return this.http.post(url, formData);
  }

  create(user: User){
    let url = this.serviceUrl + "users"
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    return this.http.post(url, formData);
  }

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }

}
