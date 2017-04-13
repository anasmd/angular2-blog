import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from "./post/post.service";
import { PostFormComponent } from './post/post-form/post-form.component';

import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CommentFormComponent } from './post/comment-form/comment-form.component';
import { CommentComponent } from './post/comment/comment.component';
import { CommentService } from './post/comment/comment.service';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserService } from './user/user.service';
import { AuthGuard } from "./auth-guard";

const appRoutes: Routes = [
   { path: "", component: UserComponent},
   { path: "signup", component: SignupComponent},
   { path: 'landing', component: PostComponent, canActivate: [AuthGuard] },
  { path: "posts/:id", component: PostDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    PostDetailComponent,
    PostDetailComponent,
    CommentFormComponent,
    CommentComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [PostService, CommentService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
