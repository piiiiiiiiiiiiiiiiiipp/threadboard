import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { PostModel } from '../post-model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { VoteButtonComponent } from '../vote-button/vote-button.component';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
    selector: 'app-post-tile',
    standalone: true,
    templateUrl: './post-tile.component.html',
    styleUrl: './post-tile.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [RouterLink, RouterLinkActive, CommonModule, VoteButtonComponent, EditorModule]
})
export class PostTileComponent {

  @Input() posts: PostModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  postCount: number = 0;  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['posts']) {
      this.updatePostCount();
    }
  }
  updatePostCount() {
    this.postCount = this.posts ? this.posts.length : 0;
  }

  isPostCountGreaterThanThree(): boolean {
    return this.postCount > 3;
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
