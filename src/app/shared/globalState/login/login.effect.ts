import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { LoginService } from '../../../login/services/login.service';
import { failedRequestLogin, failedRequestLogout, requestLogin, requestLogout, succededLogoutRequest, succededRequestLogin, checkUserCredentials, checkUserCredentialsSucceded, checkUserCredentialsFailed } from './login.action';
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
          map(() => {
            // Este navigate lo carga el diablo
            this.router.navigate(['/']);
            return succededLogoutRequest()
          }),
          catchError(error => of(failedRequestLogout({ content: error }))),
        )
      )
    )
  );

  logoutOnInvalidCredentialsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(checkUserCredentialsFailed),
      exhaustMap(() =>
        this.loginService.uploadLogout().pipe(
          map(() => succededLogoutRequest()),
          catchError(error =>
            of(failedRequestLogout({ content: error }))
          )
        )
      )
    )
  );

  checkUserCredentialsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(checkUserCredentials),
      exhaustMap(() =>
        this.loginService.areCredentialsValid().pipe(
          /* NOTA: Este efecto no se encarga de borrar la cookie jwt token */
          map(isValid =>
            isValid ? checkUserCredentialsSucceded() : checkUserCredentialsFailed()
          ),
          catchError(() => of(checkUserCredentialsFailed()))
        )
      )
    )
  );
}
