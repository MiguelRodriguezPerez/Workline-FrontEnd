import { Component, HostListener, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../../shared/globalState/login/login.selector';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'aside-options',
  imports: [RouterLink],
  templateUrl: './aside-options.html',
  styleUrl: './aside-options.scss',
})
export class AsideOptions { 

  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);

  windowWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize () {
    this.windowWidth.set(window.innerWidth)
  }

}
