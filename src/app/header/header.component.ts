import { Component } from '@angular/core';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

  