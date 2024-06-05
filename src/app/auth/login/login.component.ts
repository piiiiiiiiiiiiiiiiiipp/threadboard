import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { LoginRequestPayload } from './login-request.payload';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

ngOnInit(): void {
  this.loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  this.activatedRoute.queryParams
  .subscribe(params => {
    if (params['registered'] !== undefined && params['registered'] === 'true') {
      this.toastr.success('Signup Successful','Please Check your inbox for activation email '
        + 'activate your account before you Login!');
     
    }
  });
}

login() {
  this.loginRequestPayload.username = this.loginForm.get('username')!.value;
  this.loginRequestPayload.password = this.loginForm.get('password')!.value;

  this.authService.login(this.loginRequestPayload).subscribe(data => {
    this.isError = false;
    this.router.navigateByUrl('');
    //{ queryParams: { registered: 'true' }
    this.toastr.success('Login Successful');
  }, error => {
    this.isError = true;
   
    throwError(error);
  });
}
}
 // this.toastr.error("Не получилось ТТ", 'Попробуйте еще раз позже!',
    // {
    //   tapToDismiss: true,
    //   easeTime : 300,
    //   easing: 'ease-out',
    //   timeOut: 9000
    // }
    // );