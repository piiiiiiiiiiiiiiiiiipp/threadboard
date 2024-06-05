import { Component } from '@angular/core';
import { SideBarComponent } from "../../shared/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/shared/auth.service';
import { CommentService } from '../../comment/comment.service';
import { PostService } from '../../shared/post.service';
import { PostModel } from '../../shared/post-model';
import { PostTileComponent } from "../../shared/post-tile/post-tile.component";
import { SubthreadModel } from '../subthread-response';
import { SubthreadService } from '../subthread.service';
import { HeadComponent } from '../../head/head.component';

@Component({
    selector: 'app-view-subthread',
    standalone: true,
    templateUrl: './view-subthread.component.html',
    styleUrl: './view-subthread.component.css',
    imports: [HeadComponent, SideBarComponent, CommonModule, RouterModule, PostTileComponent]
})
export class ViewSubthreadComponent {

    id: number;
    role: string;
    posts: PostModel[];
    postLength: number;
    subthread: SubthreadModel;
    name: string;

    constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
        private commentService: CommentService, private authService : AuthService, private router: Router, private subthreadService: SubthreadService) {
        this.id = this.activatedRoute.snapshot.params['id'];
        
        this.subthreadService.getSubthreadById(this.id).subscribe(data => {
            this.subthread = data;
            this.name = this.subthread.name;
          });

        this.authService.role.subscribe((data: string) => {
          this.role = data;
        });
        this.role = this.authService.isAdmin();
    
    
        this.postService.getAllPostsBySubthread(this.id).subscribe(data => {
          this.posts = data;
          this.postLength = data.length;
        });
        this.role = this.authService.isAdmin();
        
    }

    deleteSubthread(id: number) {
        this.authService.deleteSubthread(id);
        // this.router.navigateByUrl('');
    }

    
    isAdmin() {
        console.log(this.name);
          return this.role === "ADMIN";
    }    
}
