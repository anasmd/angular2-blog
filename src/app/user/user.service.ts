import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

  serviceUrl = "https://dry-taiga-18497.herokuapp.com/";
  constructor(private http: Http) { }

  authenticate(email:string, password: string){
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    let url = this.serviceUrl + "/authenticate";
    return this.http.post(url, formData);
  }

  create(user: User){
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    return this.http.post(this.serviceUrl, formData);
  }

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }

}
