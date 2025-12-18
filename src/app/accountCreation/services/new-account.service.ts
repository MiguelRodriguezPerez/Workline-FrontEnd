import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, debounceTime, map, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { LoggedUserContext } from '../../shared/objects/interfaces/LoggedUserContextInterface';
import { NuevoUsuarioDto } from '../interfaces/NuevoUsuarioDto';

@Injectable({
  providedIn: 'root'
})
export class NewAccountService {

  private backendBaseUrl = environment.apiUrl;
  private apiUrl = '/nuevaCuenta/api';
  private http = inject(HttpClient);

  // TODO: Entender

  isUsernameRepeated() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<{usernameAlreadyTaken: boolean} | null> => {
      if (!control.value) {
        return of(null);
      }

    return this.http.get<boolean>(`${this.backendBaseUrl}${this.apiUrl}/esNombreRepetido/${control.value}`)
      .pipe(
        debounceTime(500),
        map((exists) => (exists ? { usernameAlreadyTaken: exists } : null)),
        catchError(() => of(null))
      );
    }
  }

  createUserRequest (nuevoUsuario: NuevoUsuarioDto): Observable<LoggedUserContext> {
    return this.http.post<LoggedUserContext>(`${this.backendBaseUrl}${this.apiUrl}/nuevoUsuario`, nuevoUsuario)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear nuevo usuario');
          console.error(error);
          
          return throwError(() => error);
        })
      )
  }
}
