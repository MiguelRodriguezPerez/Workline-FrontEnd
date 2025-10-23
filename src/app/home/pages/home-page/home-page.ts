import { Component } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";

@Component({
  selector: 'app-home-page',
  imports: [Navbar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage { }
