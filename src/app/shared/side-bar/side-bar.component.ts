import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreatePost() {
    this.router.navigateByUrl('/create-post');
  }

  goToCreateSubthread() {
    this.router.navigateByUrl('/create-subthread');
  }
}
