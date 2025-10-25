import { Component } from '@angular/core';
import { HomeOption } from "./home-option/home-option";

@Component({
  selector: 'home-options',
  imports: [HomeOption],
  templateUrl: './home-options.html',
  styleUrl: './home-options.scss',
})
export class HomeOptions { }
