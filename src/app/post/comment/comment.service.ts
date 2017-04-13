import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Comment } from "./comment";

@Injectable()
export class CommentService {
  serviceUrl = "https://dry-taiga-18497.herokuapp.com/posts";
  headers = new Headers({"Authorization": localStorage.getItem('token')});
  constructor(private http: Http) {
  }

  list(postId: number){
    let url = this.serviceUrl +"/"+postId+"/comments";
    return this.http.get(url, {headers: this.headers});
  }

  save(postId:number, comment: Comment){
    let url = this.serviceUrl +"/" +postId+"/comments";
    return this.http.post(url, comment, {headers: this.headers});
  }

  delete(postId: number, id:number) {
    let url = this.serviceUrl +"/" +postId+"/comments"+"/"+id;
    return this.http.delete(url, {headers: this.headers})
  }

}
