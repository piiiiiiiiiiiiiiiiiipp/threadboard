import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SubthreadModel } from '../subthread-response';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SubthreadService } from '../subthread.service';
import { catchError, of, tap, throwError } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HeadComponent } from '../../head/head.component';

@Component({
  standalone: true,
  selector: 'app-create-subthread',
  templateUrl: './create-subthread.component.html',
  styleUrls: ['./create-subthread.component.css'],
  imports: [RouterLink,RouterLinkActive,CommonModule,ReactiveFormsModule, EditorModule, HeadComponent],
  encapsulation: ViewEncapsulation.None,
})
export class CreateSubthreadComponent implements OnInit {
  createSubthreadForm: FormGroup;
  subthreadModel: SubthreadModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subthreadService: SubthreadService, private toastr: ToastrService) {
    this.createSubthreadForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subthreadModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubthread() {
    this.subthreadModel.name = this.createSubthreadForm.get('title')!.value;
    this.subthreadModel.description = this.createSubthreadForm.get('description')!.value;

    this.subthreadService.createSubthread(this.subthreadModel).pipe(
      tap(() => {
        this.router.navigateByUrl('/list-subthreads');
        this.toastr.success('Subthread created successfully!', 'Success');
      }),
      catchError((error: any) => {
        console.error('Error creating subthread:', error);
        this.toastr.error('Failed to create subthread. Please try again later.', 'Error');
        return of(null);
      })
    ).subscribe();
  }
}