import { Component } from '@angular/core';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { HomeCartel } from "../../components/home-cartel/home-cartel";
import { HomeOptions } from "../../components/home-options/home-options";

@Component({
  selector: 'app-home-page',
  imports: [ HomeCartel, HomeOptions, Footer, NavbarWrapper],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage { }
