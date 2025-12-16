import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, exhaustMap, map, Observable, of, tap, throwError } from 'rxjs';
import { UsuarioSettingsDto } from '../interfaces/UsuarioSettingsDto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoggedUserContext } from '../../shared/objects/interfaces/LoggedUserContextInterface';
import { Store } from '@ngrx/store';
import { updateLoggedUser } from '../../shared/globalState/login/login.action';
import { AbstractControl, AsyncValidator, AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  private baseUrl: string = environment.apiUrl;
  private userSettingsUrl: string = '/user';
  private http = inject(HttpClient);
  private store = inject(Store);

  getCurrentUser (): Observable<UsuarioSettingsDto> {
    return this.http.get<UsuarioSettingsDto>(`${this.baseUrl}${this.userSettingsUrl}/getUserData`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching current user data');
          return throwError(() => error);
        })
      )
  };

  updateUserData (usuarioDto: UsuarioSettingsDto): Observable<LoggedUserContext> {
    return this.http.put<LoggedUserContext>(`${this.baseUrl}${this.userSettingsUrl}/updateUserData`,
      usuarioDto,
      { withCredentials: true } // necesario si tu backend devuelve cookies
    )
    .pipe(
      tap(response => this.store.dispatch(updateLoggedUser({ content: response }))),
      catchError((error: HttpErrorResponse) => {
        console.error('Error updating user data', error);
        return throwError(() => error);
      })
    );
  }

  deleteLoggedUser(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${this.userSettingsUrl}/borrarCuentaUsuarioLogueado`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error deleting logged user account');
        return throwError(() => error);
      })
    );
  }

  verifyCurrentPassword(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ isPasswordCorrect: boolean } | null> => {
      if (!control.value) return of({ isPasswordCorrect: false });

      return this.http.post<boolean>(`{this.baseUrl}${this.userSettingsUrl}/confirmarPassword`, control.value)
        .pipe(
          /* No soy capaz de explicar porque esta condición booleana funciona correctamente */
          map(resp => resp ? { isPasswordCorrect: resp } : null ),
          catchError( (error: HttpErrorResponse) => {
            console.error('Error verifying password');
            return throwError(() => error);

          })
        )

    }

  }


}
