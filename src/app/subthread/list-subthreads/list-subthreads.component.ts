import { Component, OnInit } from '@angular/core';
import { SubthreadModel } from '../subthread-response';
import { SubthreadService } from '../subthread.service';
import { catchError, of, tap, throwError } from 'rxjs';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeadComponent } from '../../head/head.component';

@Component({
  standalone:true,
  selector: 'app-list-subthreads',
  templateUrl: './list-subthreads.component.html',
  styleUrls: ['./list-subthreads.component.css'],
  imports: [SideBarComponent,CommonModule, RouterModule, HeadComponent]
})
export class ListSubthreadsComponent implements OnInit {

  subthreads: Array<SubthreadModel>;
  constructor(private subthreadService: SubthreadService) { }

  ngOnInit(): void {
    this.subthreadService.getAllSubthreads().pipe(
      tap(data => {
        this.subthreads = data;
      }),
      catchError(error => {
        console.error('Error fetching subthreads:', error);
        return of([]); 
      })
    ).subscribe();
  }
}