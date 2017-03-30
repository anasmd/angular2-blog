import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Post } from "./post";

@Injectable()
export class PostService {
  serviceUrl = "https://dry-taiga-18497.herokuapp.com/posts";
  headers = new Headers({"Content-Type": "application/json"});
  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.serviceUrl);
  }

  savePost(post:Post){
    console.log(JSON.stringify(post));
    return this.http.post(this.serviceUrl, post);
  }

  deletePost(id: number) {
    let url = this.serviceUrl + "/" + id;
    console.log(url);
    return this.http.delete(url);
  }

  show(id: number) {
    let url = this.serviceUrl + "/" + id;
    return this.http.get(url);
  }

}
