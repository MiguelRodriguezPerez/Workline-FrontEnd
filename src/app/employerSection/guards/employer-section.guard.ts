import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../shared/globalState/login/login.selector';

export const employerSectionGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loggedUser = inject(Store).selectSignal(selectLoggedUser)();

  if (!loggedUser || loggedUser.rol !== 'CONTRATA') {
    router.navigate(['/login']);
    return false; 
  }

  return true; 
};
