import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Comment } from "./comment";

@Injectable()
export class CommentService {
  serviceUrl = "https://dry-taiga-18497.herokuapp.com/posts";
  headers = new Headers({"Content-Type": "application/json"});
  constructor(private http: Http) {
  }

  list(postId: number){
    let url = this.serviceUrl +"/"+postId+"/comments";
    return this.http.get(url);
  }

  save(postId:number, comment: Comment){
    let url = this.serviceUrl +"/" +postId+"/comments";
    return this.http.post(url, comment);
  }

  delete(postId: number, id:number) {
    let url = this.serviceUrl +"/" +postId+"/comments"+"/"+id;
    return this.http.delete(url)
  }

}
