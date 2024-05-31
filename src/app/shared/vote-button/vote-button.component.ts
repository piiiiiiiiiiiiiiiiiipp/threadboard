import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { VotePayload } from './vote-payload';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../post.service';
import { AuthService } from '../../auth/shared/auth.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { VoteType } from './vote-type';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-vote-button',
  standalone: true,
  imports: [],
  templateUrl: './vote-button.component.html',
  styleUrl: './vote-button.component.css'
})

export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  votePayload: VotePayload;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(private voteService: VoteService,
    private authService: AuthService,
    private postService: PostService, private toastr: ToastrService) {

    this.votePayload = {
      voteType: undefined!,
      postId: undefined!
    }
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }
}