import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommentPayload } from '../../comment/comment.payload';
import { CommentService } from '../../comment/comment.service';
import { PostModel } from '../../shared/post-model';
import { PostService } from '../../shared/post.service';
import { PostTileComponent } from '../../shared/post-tile/post-tile.component';
import { CommonModule, NgFor } from '@angular/common';
import { HeadComponent } from '../../head/head.component';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  imports: [PostTileComponent,CommonModule,HeadComponent, RouterModule],
  encapsulation: ViewEncapsulation.None,
})
export class MyProfileComponent implements OnInit {
[x: string]: any;
  name: string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
    private commentService: CommentService, private authService : AuthService) {
    this.name = this.activatedRoute.snapshot.params['name'];
    


    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
    this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length;
    });
  }

  ngOnInit(): void {
  }

}