import { Component } from '@angular/core';
import { HomeParagraph } from "./home-paragraph/home-paragraph";
import { HomeImage } from "./home-image/home-image";

@Component({
  selector: 'home-cartel',
  imports: [HomeParagraph, HomeImage],
  templateUrl: './home-cartel.html',
  styleUrl: './home-cartel.scss',
})
export class HomeCartel { }
