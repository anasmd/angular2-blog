import { Component, OnInit } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  posts: Array<string>;
  constructor(private postservice: PostService ) { }

  ngOnInit() {
    this.postservice.getPosts()
    .subscribe(response => this.posts = response.json());
  }

  onFormSubmit(resp: any){
    this.posts.push(resp);
  }

  onDestroy(id: number) {
    this.postservice.deletePost(id)
    .subscribe((response) => {
      if(response.status == 204) {
        this.posts = this.posts.filter(post => parseInt(post["id"]) !== id);
      }
    });
  }

}
