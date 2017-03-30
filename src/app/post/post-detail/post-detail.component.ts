import { Component, OnInit } from '@angular/core';
import { PostService } from ".././post.service";
import { Post } from ".././post";

import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post1: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getPost();
  }

  getPostAndComments(){
    this.route.params.subscribe(params => {
      let id = +params["id"];
      this.postService.show(id)
      .subscribe(response => this.post1 = response.json());
    });
  }

}
