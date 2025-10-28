import { Component, signal } from '@angular/core';

@Component({
  selector: 'navbar-phone-side-menu',
  imports: [],
  templateUrl: './navbar-phone-side-menu.html',
  styleUrl: './navbar-phone-side-menu.scss',
})
export class NavbarPhoneSideMenu { 
  
  isOpen = signal<boolean>(false);

  onClickEvent () {
    document.getElementById('dropdown-nav-menu')!.style.width = this.isOpen() ? '0%' : '100%';
    this.isOpen.set(!this.isOpen());
  }
}
