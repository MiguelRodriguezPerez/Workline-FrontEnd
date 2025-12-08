import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoginState } from '../../shared/globalState/login/login.selector';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  /* Si loggedUser no es null, no podrá acceder al loginPage */
  return !store.selectSignal(selectLoginState)().loggedUser;
};
