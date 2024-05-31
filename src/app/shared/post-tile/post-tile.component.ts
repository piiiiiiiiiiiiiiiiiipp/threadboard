import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PostModel } from '../post-model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { VoteButtonComponent } from '../vote-button/vote-button.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-post-tile',
    standalone: true,
    templateUrl: './post-tile.component.html',
    styleUrl: './post-tile.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [RouterLink, RouterLinkActive, CommonModule, VoteButtonComponent]
})
export class PostTileComponent {

  @Input() posts: PostModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
