import { Component, HostListener, signal } from '@angular/core';
import { Navbar } from "../navbar";
import { NavbarPhone } from "../navbar-phone/navbar-phone";

@Component({
  selector: 'navbar-wrapper',
  imports: [Navbar, NavbarPhone],
  templateUrl: './navbar-wrapper.html',
  styleUrl: './navbar-wrapper.scss',
})
export class NavbarWrapper { 
  
  windowWidth = signal<number>(window.innerWidth);

  /* HostListener escucha un evento a tiempo real */
  @HostListener('window:resize')
  onResize() {
    this.windowWidth.set(window.innerWidth);
  }

}

/* Puedes capturar el evento */
// @HostListener('window:resize', ['$event'])
//   onResize(event: UIEvent) {
//     console.log(event);
    
//     this.windowWidth.set(window.innerWidth);
//   }