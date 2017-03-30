import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from "./post/post.service";
import { PostFormComponent } from './post/post-form/post-form.component';

import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CommentFormComponent } from './post/comment-form/comment-form.component';
import { CommentComponent } from './post/comment/comment.component';
import { CommentService } from './post/comment/comment.service'

const appRoutes: Routes = [
   { path: '', redirectTo: 'landing', pathMatch: 'full' },
   { path: 'landing', component: PostComponent },
  { path: "posts/:id", component: PostDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    PostDetailComponent,
    PostDetailComponent,
    CommentFormComponent,
    CommentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
