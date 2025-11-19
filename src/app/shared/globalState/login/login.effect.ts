import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { LoginService } from '../../../login/services/login.service';
import { failedRequestLogin, failedRequestLogout, requestLogin, requestLogout, succededLogoutRequest, succededRequestLogin } from './login.action';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {

  router = inject(Router);
  actions$ = inject(Actions);
  loginService = inject(LoginService);

  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      exhaustMap(({ loginRequest }) =>
        this.loginService.uploadLogin(loginRequest).pipe(
          map(user => {
            // Redirige solo si no da error
            this.router.navigate(['/']);
            return succededRequestLogin({ content: user })
          }),
          catchError(error => of(failedRequestLogin({ content: error }))),
        )
      )
    )
  );

  logoutEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogout),
      exhaustMap(() =>
        this.loginService.uploadLogout().pipe(
          map(() => succededLogoutRequest()),
          catchError(error => of(failedRequestLogout({ content: error }))),
          tap(() => this.router.navigate(['/']))
        )
      )
    )
  );
}
