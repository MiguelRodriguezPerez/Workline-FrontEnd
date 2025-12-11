import { Component, HostListener, signal } from '@angular/core';
import { AsideOptions } from "../aside-options/aside-options";
import { AsideOptionsPhone } from "../aside-options-phone/aside-options-phone";

@Component({
  selector: 'aside-options-wrapper',
  imports: [AsideOptions, AsideOptionsPhone],
  templateUrl: './aside-options-wrapper.html',
  styleUrl: './aside-options-wrapper.scss',
})
export class AsideOptionsWrapper { 

  windowWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize () {
    this.windowWidth.set(window.innerWidth)
  }
}
