import { Comment } from "./comment/comment"
export class Post {
  id: number;
  content: string;
  create_at: string;
  

  constructor(content?: string){
    this.content = content;
  }

  save(service){
    service.savePost(this)
    .subscribe(response => console.log(response.json()));
  }
}
