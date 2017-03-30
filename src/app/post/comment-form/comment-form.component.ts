import { Component, OnInit } from '@angular/core';
import { Comment } from "../comment/comment"
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  comment: Comment;
  constructor() {
    this.comment = new Comment("");
  }

  onSubmit(){
    console.log(this.comment);
  }

  ngOnInit() {
  }

}
