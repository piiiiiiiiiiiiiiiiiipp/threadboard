import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-mainpage',
    standalone: true,
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.css',
    imports: [ SvgIconComponent,RouterLink,RouterLinkActive,CommonModule,ReactiveFormsModule,CommonModule],
})
export class MainpageComponent {

}
