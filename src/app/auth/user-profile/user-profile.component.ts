import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentPayload } from '../../comment/comment.payload';
import { CommentService } from '../../comment/comment.service';
import { PostModel } from '../../shared/post-model';
import { PostService } from '../../shared/post.service';
import { PostTileComponent } from '../../shared/post-tile/post-tile.component';
import { CommonModule, NgFor } from '@angular/common';
import { HeadComponent } from '../../head/head.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [PostTileComponent,CommonModule,HeadComponent],
  encapsulation: ViewEncapsulation.None,
})
export class UserProfileComponent implements OnInit {
  name: string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
    private commentService: CommentService) {
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