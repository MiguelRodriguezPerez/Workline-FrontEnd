import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoggedUser, selectLoginState } from '../../shared/globalState/login/login.selector';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  /* Si loggedUser es null, no podrá acceder */
  return !!store.selectSignal(selectLoggedUser)();
};
