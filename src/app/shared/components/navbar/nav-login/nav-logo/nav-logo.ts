import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'nav-logo',
  imports: [RouterLink],
  templateUrl: './nav-logo.html',
  styleUrl: './nav-logo.scss',
})
export class NavLogo { }
