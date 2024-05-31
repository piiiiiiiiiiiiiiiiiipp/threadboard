// app.routes.ts
import { Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CreateSubthreadComponent } from './subthread/create-subthread/create-subthread.component';
import { postCreateComponent } from './post/post-create/post-create.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { AuthGuard } from './auth/auth.guard';
import { ListSubthreadsComponent } from './subthread/list-subthreads/list-subthreads.component';
import { HeadComponent } from './head/head.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    children: [
      { path: '',canActivate:[AuthGuard], component: 
       HeadComponent },
      ]
  },
  // <a routerLink="/view-subthread/{{subthread.id}}">{{subthread.name}}</a>
  { path: 'view-subthread/:id', canActivate:[AuthGuard], component: ListSubthreadsComponent},
  { path: 'view-post/:id', component: PostViewComponent, canActivate: [AuthGuard],},
  { path: 'user-profile/:name', component: UserProfileComponent },
  { path: 'list-subthreads', loadComponent: () => import('./subthread/list-subthreads/list-subthreads.component').then((m) => m.ListSubthreadsComponent),},
  { path: 'create-post', component: postCreateComponent, canActivate:[AuthGuard]},
  { path: 'create-subthread', component: CreateSubthreadComponent, canActivate: [AuthGuard], },
  { path: 'sign-up',
  loadComponent: () => import('./auth/sign-up/sign-up.component').then((m) => m.SignUpComponent),
 }, 
 { path: 'login',
  loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),
 }, 
 {
  path: 'login/ ',
  redirectTo: ''
},
{
  path: 'login/sign-up',
  redirectTo: 'sign-up'
},
{
  path: 'sign-up/login',
  redirectTo: 'login'
},
{
  path: 'main-page',
  loadComponent: () => import('./mainpage/mainpage.component').then((m) => m.MainpageComponent),
},
{
  path: 'login/loggedin', canActivate: [AuthGuard],
  redirectTo: ''
},
{
  path: 'home',
  redirectTo: ''
},

];