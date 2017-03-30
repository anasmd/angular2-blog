import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommentService } from "../comment/comment.service";
import { Comment } from "../comment/comment";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() postId;
  @Output() commentSubmit = new EventEmitter<Comment>();;
  comment: Comment;


  constructor(private commentService:CommentService) {
    this.comment = new Comment("");
  }

  onSubmit(){
    this.commentService.save(this.postId, this.comment)
    .subscribe((response) => {
      if(response.status == 201) {
        console.log(response.status);
        console.log(response.json());
        this.commentSubmit.emit(response.json());
        this.comment = new Comment("");
      }
    });
  }

  ngOnInit() {
    console.log("jjjjjjj");
  }

}
