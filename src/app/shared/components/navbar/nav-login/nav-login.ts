import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'nav-login',
  imports: [MatIcon, RouterLink],
  templateUrl: './nav-login.html',
  styleUrl: './nav-login.scss',
})
export class NavLogin { 

}
