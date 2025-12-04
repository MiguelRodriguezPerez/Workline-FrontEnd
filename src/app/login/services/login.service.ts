import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

import { LoggedUserContext } from '../../shared/objects/interfaces/LoggedContextInterface';
import { LoginRequest } from '../interfaces/LoginRequestFormGroup';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendBaseUrl = environment.apiUrl;
  private apiUrl: string = '/auth';
  private http = inject(HttpClient);

  uploadLogin(loginRequest: LoginRequest): Observable<LoggedUserContext> {
    if (!loginRequest) return of();

    return this.http.post<LoggedUserContext>(`${this.backendBaseUrl}${this.apiUrl}/login`,
      loginRequest)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          /* Al hacer peticiones asíncronas todos los errores que puedas recibir usando HttpClient
          tendrán como tipo HttpErrorResponse. Puedes evalúar el código de error para decidir como lo
          gestionas */
          return throwError(() => error);
        })
      );
  }

  uploadLogout(): Observable<null> {
    return this.http.get<null>(`${this.backendBaseUrl}${this.apiUrl}/logout`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error)
        })
      )
  }

  areCredentialsValid(): Observable<boolean> {
    return this.http.get<boolean>(`${this.backendBaseUrl}${this.apiUrl}/areCredentialsValid`);
  }


}
