import { Component, OnInit,Input } from '@angular/core';
import { CommentService } from "./comment.service";
import { Comment } from "./comment";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() postId;
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.list(this.postId)
    .subscribe((response) =>{
      console.log(response.status);
      console.log(response.json());
      this.comments = response.json();
      console.log(this.comments.length);
    } );
  }

  deleteComment(id:number) {
    this.commentService.delete(this.postId, id)
    .subscribe((response) => {
      console.log(response.status);
      if(response.status == 202) {
        this.comments = this.comments.filter(c => parseInt(c["id"]) !== id)
      }
    });
  }

  updateList(comment: Comment){
    this.comments.unshift(comment);
  }

}
