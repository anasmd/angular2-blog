import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from ".././post";
import { PostService } from ".././post.service";


@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() formSubmit = new EventEmitter<string>();

  post :Post;
  constructor(private postService: PostService) {
    this.post = new Post("");
  }

  onSubmit(){
    this.postService.savePost(this.post)
    .subscribe(response => this.emitResponse(response));
  }

  emitResponse(response:any) {
    if (response.status == 200) {
      this.formSubmit.emit(response.json());
      this.post = new Post("");
    }
  }



}
