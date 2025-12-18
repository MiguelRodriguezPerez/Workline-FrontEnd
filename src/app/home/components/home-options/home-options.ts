import { Component } from '@angular/core';
import { HomeOption } from "./home-option/home-option";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-options',
  imports: [HomeOption, RouterLink],
  templateUrl: './home-options.html',
  styleUrl: './home-options.scss',
})
export class HomeOptions { }
