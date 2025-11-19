import { Component, inject } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { Router, RouterLink } from "@angular/router";
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../globalState/login/login.selector';
import { requestLogout } from '../../../globalState/login/login.action';

@Component({
  selector: 'nav-login',
  imports: [MatIcon, RouterLink],
  templateUrl: './nav-login.html',
  styleUrl: './nav-login.scss',
})
export class NavLogin { 
  /* Los selectores de ngrx devuelven por defecto observables, pero puedes solicitar que devuelvan señales en su lugar.
  Si decides recibir observables tendrás que usar el asyncPipe para mostrar sus valores reales.

  Solo necesitarás observables cuando requieras que pasen por operaciones de rjxs. Si los suscribes manualmente,
  también deberás desuscribirlos a mano.

  El "$" al final de una variable implica que será un observable, que requerirá de asyncPipe para mostrar su valor
  y que no será un valor directo

  user$ = this.store.select(selectUser); */

  router = inject(Router);
  store = inject(Store);
  user = this.store.selectSignal(selectLoggedUser);


  onClickLogout() {
    this.store.dispatch(requestLogout());
  }
}
