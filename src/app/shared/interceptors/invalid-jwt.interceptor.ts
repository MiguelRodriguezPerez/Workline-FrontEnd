import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, throwError } from 'rxjs';
import { checkUserCredentialsFailed } from '../globalState/login/login.action';

export const invalidJwtInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  return next(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403 || error.status === 401)
          store.dispatch(checkUserCredentialsFailed())

        return throwError(() => error);
      })
    );
};
