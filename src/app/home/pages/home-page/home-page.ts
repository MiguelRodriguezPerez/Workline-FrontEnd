import { Component } from '@angular/core';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";

import { HomeOptions } from "../../components/home-options/home-options";
import { HomeCartel } from "../../components/home-cartel/cartel/home-cartel";

@Component({
  selector: 'app-home-page',
  imports: [HomeOptions, Footer, NavbarWrapper, HomeCartel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage { }
