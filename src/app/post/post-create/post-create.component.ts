import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

import { throwError } from 'rxjs';
import {  PostCreatePayload } from './post-create.payload';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { PostService } from '../../shared/post.service';
import { SubthreadModel } from '../../subthread/subthread-response';
import { SubthreadService } from '../../subthread/subthread.service';
import { Editor } from 'tinymce';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HeadComponent } from '../../head/head.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/shared/auth.service';

@Injectable({   
  providedIn: 'root'
})

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  standalone: true,
  imports:[RouterLinkActive, RouterModule, ReactiveFormsModule, EditorModule, HeadComponent, CommonModule]
})
export class postCreateComponent implements OnInit {

  postCreateForm: FormGroup;
  postPayload: PostCreatePayload;
  subthreads: Array<SubthreadModel>;
  isLoggedIn: boolean;
  username: string;

  constructor(private router: Router, private postService: PostService,
    private subthreadService: SubthreadService, private authService: AuthService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subthreadName: ''
    }
  }

  ngOnInit() {
    this.postCreateForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subthreadName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName(); 
    this.subthreadService.getAllSubthreads().subscribe((data) => {
      this.subthreads = data;
    }, error => {
      throwError(error);
    });
  }

  postCreate() {
    this.postPayload.postName = this.postCreateForm.get('postName')?.value;
    this.postPayload.subthreadName = this.postCreateForm.get('subthreadName')?.value;
    this.postPayload.url = this.postCreateForm.get('url')?.value;
    this.postPayload.description = this.postCreateForm.get('description')?.value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}