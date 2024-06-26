import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { CommentPayload } from '../../comment/comment.payload';
import { CommentService } from '../../comment/comment.service';
import { PostModel } from '../../shared/post-model';
import { PostService } from '../../shared/post.service';
import { PostTileComponent } from '../../shared/post-tile/post-tile.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HeadComponent } from '../../head/head.component';
import { AuthService } from '../shared/auth.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [PostTileComponent, CommonModule, HeadComponent, NgIf, RouterModule],
  encapsulation: ViewEncapsulation.None,
})
export class UserProfileComponent implements OnInit {

  name: string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;
  role: string;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
    private commentService: CommentService, private authService : AuthService, private router: Router) {
    this.name = this.activatedRoute.snapshot.params['name'];

    this.authService.role.subscribe((data: string) => {
      this.role = data;
    });
    this.role = this.authService.isAdmin();


    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
    this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length;
    });
    this.role = this.authService.isAdmin();
  
  }

  ngOnInit(): void {
  }

  banUser(username: string){
    this.authService.ban(username);
    this.router.navigateByUrl('');
    
  }
  isAdmin() {
     return this.role === "ADMIN";
    }
}