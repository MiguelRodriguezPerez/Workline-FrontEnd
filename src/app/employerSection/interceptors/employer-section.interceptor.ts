import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../shared/globalState/login/login.selector';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

export const employerSectionInterceptor: HttpInterceptorFn = (req, next) => {
  const loggedUser = inject(Store).selectSignal(selectLoggedUser);
  const router = inject(Router);

  if (req.url.includes('employerSection') && loggedUser()?.rol !== 'CONTRATA') {
    router.navigate(['/login']);
    return EMPTY;
  }

  return next(req);
};
