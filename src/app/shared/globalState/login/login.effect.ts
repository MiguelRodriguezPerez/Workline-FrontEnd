import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { LoginService } from '../../../login/services/login.service';
import { failedRequestLogin, failedRequestLogout, requestLogin, requestLogout, succededLogoutRequest, succededRequestLogin } from './login.action';

@Injectable()
export class LoginEffects {
  actions$ = inject(Actions);
  loginService = inject(LoginService);

  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      exhaustMap(({ loginRequest }) =>
        this.loginService.uploadLogin(loginRequest).pipe(
          map(user => succededRequestLogin({ content: user })),
          catchError(error => of(failedRequestLogin({ content: error })))
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
          catchError(error => of(failedRequestLogout({ content: error })))
        )
      )
    )
  );
}
