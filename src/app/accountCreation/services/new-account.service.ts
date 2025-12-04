import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, debounceTime, map, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewAccountService {

  private backendBaseUrl = environment.apiUrl;
  private apiUrl = '/nuevaCuenta/api';
  private http = inject(HttpClient);

  // uploadFirstStepUserCreation (nuevoUsuarioDto: NuevoUsuarioDto) : Observable

  // isUsernameRepeated (username: string): Observable<boolean> {
  //   return this.http.get<boolean>(`${this.backendBaseUrl}${this.apiUrl}/esNombreRepetido/${username}`)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         console.error('Error updating job post', error);
  //         return throwError(() => error);
  //       })
  //     )
  // }

  // TODO: Entender

  isUsernameRepeated() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<{emailExists: boolean} | null> => {
      if (!control.value) {
        return of(null);
      }

      return this.http.get<boolean>(`${this.backendBaseUrl}${this.apiUrl}/esNombreRepetido/${control.value}`).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        catchError(() => of(null))
      );
    }
  }
}
