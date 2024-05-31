// app.component.ts
import { Component, NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { appConfig } from './app.config';
import { EditorModule } from '@tinymce/tinymce-angular';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
        RouterOutlet,
        HeaderComponent,
        // SignUpComponent,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        ReactiveFormsModule, HomeComponent,
        ReactiveFormsModule,
        FormsModule,
        EditorModule,
          ],
})



export class AppComponent {
  title = 'angular_forum';

}

