import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpRequestPayload } from './sign-up-request.payload';
import { AuthService } from '../shared/auth.service';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLinkActive, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent implements OnInit{

  SignUpRequestPayload: SignUpRequestPayload;  
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    // constructor() {
    this.SignUpRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
   }

  ngOnInit(){
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', { validators:[Validators.required, Validators.email]}),
      password: new FormControl('', Validators.required)
    
    });
  }
  signup() {
    this.SignUpRequestPayload.username = this.signupForm.get('username')?.value;
    this.SignUpRequestPayload.email = this.signupForm.get('email')?.value;
    this.SignUpRequestPayload.password = this.signupForm.get('password')?.value;

    this.authService.signup(this.SignUpRequestPayload)
    .subscribe(() => {
      this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
    }, () => {
      this.toastr.error('Registration Failed! Please try again');
    });
  }
}
