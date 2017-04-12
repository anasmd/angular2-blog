import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Post } from "./post";

@Injectable()
export class PostService {
  serviceUrl = "http://localhost:3003/posts"; //"https://dry-taiga-18497.herokuapp.com/posts"

  //headers = new Headers({"Content-Type": "application/json"});
  headers = new Headers({"Authorization": localStorage.getItem('token')});

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.serviceUrl, {headers: this.headers});
  }

  savePost(post:Post){
    console.log(JSON.stringify(post));
    return this.http.post(this.serviceUrl, post, {headers: this.headers});
  }

  deletePost(id: number) {
    let url = this.serviceUrl + "/" + id;
    console.log(url);
    return this.http.delete(url, {headers: this.headers});
  }

  show(id: number) {
    let url = this.serviceUrl + "/" + id;
    return this.http.get(url, {headers: this.headers});
  }

}
