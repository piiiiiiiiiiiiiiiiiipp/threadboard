import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostModel } from '../../shared/post-model';
import { PostService } from '../../shared/post.service';
import { CommentPayload } from '../../comment/comment.payload';
import { CommentService } from '../../comment/comment.service';
import { VoteButtonComponent } from '../../shared/vote-button/vote-button.component';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { SubthreadSideBarComponent } from '../../shared/subthread-side-bar/subthread-side-bar.component';
import { CommonModule, NgFor } from '@angular/common';
import { HeadComponent } from '../../head/head.component';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [VoteButtonComponent, SideBarComponent, SubthreadSideBarComponent, ReactiveFormsModule, CommonModule, HeadComponent],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PostViewComponent implements OnInit {

  postId: number;
  post: PostModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];

  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router) {
    this.postId = this.activateRoute.snapshot.params['id'];

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      postId: this.postId
    };
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text')!.value;
    this.commentService.postComment(this.commentPayload).subscribe(
      data => {
        this.commentForm.get('text')!.setValue('');
        this.getCommentsForPost();
      },
      error => {
        console.error('Error posting comment:', error);
      }
    );
  }
  
  private getPostById() {
    this.postService.getPost(this.postId).subscribe(
      data => {
        this.post = data;
      },
      error => {
        console.error('Error fetching post:', error);
      }
    );
  }
  
  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(
      data => {
        this.comments = data;
      },
      error => {
        console.error('Error fetching comments for post:', error);
      }
    );
  }

}
