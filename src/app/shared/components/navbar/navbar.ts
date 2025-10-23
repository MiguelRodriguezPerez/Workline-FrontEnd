import { Component } from '@angular/core';
import { NavLogo } from "./nav-logo/nav-logo";
import { NavList } from "./nav-list/nav-list";

@Component({
  selector: 'navbar',
  imports: [NavLogo, NavList],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar { }
