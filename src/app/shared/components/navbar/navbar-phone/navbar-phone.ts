import { Component } from '@angular/core';
import { NavLogo } from "../nav-logo/nav-logo";
import { NavLogin } from "../nav-login/nav-login";
import { NavbarPhoneSideMenu } from "./navbar-phone-side-menu/navbar-phone-side-menu";

@Component({
  selector: 'navbar-phone',
  imports: [NavLogo, NavLogin, NavbarPhoneSideMenu],
  templateUrl: './navbar-phone.html',
  styleUrl: './navbar-phone.scss',
})
export class NavbarPhone { }
