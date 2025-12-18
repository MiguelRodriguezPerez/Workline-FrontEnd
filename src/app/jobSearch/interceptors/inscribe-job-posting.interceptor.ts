import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { selectLoggedUser } from '../../shared/globalState/login/login.selector';
/* Para bloquear y redirigir una petición se hace así. Recuerda que para que funcionen
tienes que proveer el interceptor en app.config.ts */


export const inscribeJobPostingInterceptor: HttpInterceptorFn = (req, next) => {
  const loggedUser = inject(Store).selectSignal(selectLoggedUser);
  const router = inject(Router);

  if (
    (req.url.includes('inscribirBusca') || req.url.includes('desinscribirBusca')) &&
    loggedUser()?.rol !== 'BUSCA'
  ) {
    router.navigate(['/login']);
    return EMPTY; 
  }

  return next(req);
};

