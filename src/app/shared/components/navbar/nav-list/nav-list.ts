import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'nav-list',
  imports: [RouterLink],
  templateUrl: './nav-list.html',
  styleUrl: './nav-list.scss',
})
export class NavList { }
