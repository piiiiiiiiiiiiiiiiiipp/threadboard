import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/shared/auth.service';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, @Inject(AuthService) private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = this.authService.isLoggedIn();
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
    return true;
  }
  //  canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable | Promise | boolean {
  //     if (this.authService.) {
  //         if (this.authService.isTokenExpired()) {
  //           // Should Redirect Sig-In Page
  //         } else {
  //           return true;
  //         }
  //     } else {
  //       return new Promise((resolve) => {
  //         this.loginService.signIncallBack().then((e) => {
  //            resolve(true);
  //         }).catch((e) => {
  //           // Should Redirect Sign-In Page
  //         });
  //       });
  //     }
  // }
}
