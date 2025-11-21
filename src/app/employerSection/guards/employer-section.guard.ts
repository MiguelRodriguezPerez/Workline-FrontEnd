import { inject } from '@angular/core';
import type { CanActivateChildFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../shared/globalState/login/login.selector';
import { Rol } from '../../shared/objects/enums/Rol';

export const employerSectionGuard: CanActivateChildFn = (childRoute, state) => {
  const store = inject(Store);
  console.log(Rol.CONTRATA);
  
  return store.selectSignal(selectLoggedUser)()?.rol === Rol.CONTRATA;
};
