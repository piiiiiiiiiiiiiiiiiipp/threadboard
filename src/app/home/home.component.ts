import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PostTileComponent } from "../shared/post-tile/post-tile.component";
import { SideBarComponent } from "../shared/side-bar/side-bar.component";
import { SubthreadSideBarComponent } from "../shared/subthread-side-bar/subthread-side-bar.component";
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadComponent } from '../head/head.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeadComponent, RouterLinkActive, RouterLink, CommonModule, PostTileComponent, SideBarComponent, SubthreadSideBarComponent,ReactiveFormsModule]
})

export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
  }

}