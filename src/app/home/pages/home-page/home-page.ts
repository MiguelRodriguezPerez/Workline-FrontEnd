import { Component } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { HomeCartel } from "../../components/home-cartel/home-cartel";
import { HomeOptions } from "../../components/home-options/home-options";
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'app-home-page',
  imports: [Navbar, HomeCartel, HomeOptions, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage { }
