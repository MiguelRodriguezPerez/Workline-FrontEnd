import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HomeOption } from '../home-option/home-option';

@Component({
  selector: 'home-options',
  imports: [HomeOption, RouterLink],
  templateUrl: './home-options.html',
  styleUrl: './home-options.scss',
})
export class HomeOptions { }
