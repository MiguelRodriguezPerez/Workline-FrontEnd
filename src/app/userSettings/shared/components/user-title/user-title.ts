import { Component, HostListener, inject, input, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../../shared/globalState/login/login.selector';
import { AsideOptionsPhone } from "../aside-options-phone/aside-options-phone";

@Component({
  selector: 'user-title',
  imports: [AsideOptionsPhone],
  templateUrl: './user-title.html',
  styleUrl: './user-title.scss',
})
export class UserTitle { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);
  windowWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize () {
    this.windowWidth.set(window.innerWidth)
  }
}
