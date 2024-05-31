import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ElementRef, importProvidersFrom } from '@angular/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TokenInterceptor } from './app/token-interceptor';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

bootstrapApplication(AppComponent, {
  providers: [ 
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    importProvidersFrom(
      Router,
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      BrowserModule,
      NgxWebstorageModule.forRoot(),
      BrowserAnimationsModule, 
      TokenInterceptor,
      HttpClientModule,
      // NgxsResetPluginModule.forRoot(),
      // // devtools always last
      // NgxsReduxDevtoolsPluginModule.forRoot()
      ToastrModule,
      ElementRef,
      NgbModule,
      RouterModule.forRoot(routes)
    ),provideHttpClient(),
    provideAngularSvgIcon() ,
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
});