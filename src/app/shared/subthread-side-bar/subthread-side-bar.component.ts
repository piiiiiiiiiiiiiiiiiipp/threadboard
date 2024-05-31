import { Component, OnInit } from '@angular/core';
import { SubthreadService } from '../../subthread/subthread.service';
import { SubthreadModel } from '../../subthread/subthread-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subthread-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subthread-side-bar.component.html',
  styleUrl: './subthread-side-bar.component.css'
})
export class SubthreadSideBarComponent implements OnInit {
  subthreads: Array<SubthreadModel> = [];
  displayViewAll: boolean;

  constructor(private subthreadService: SubthreadService) {
    this.subthreadService.getAllSubthreads().subscribe(data => {
      if (data.length > 3) {
        this.subthreads = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subthreads = data;
      }
    });
  }

  ngOnInit(): void { }
}