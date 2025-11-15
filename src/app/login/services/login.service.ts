import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { UserContextInterface } from '../../shared/interfaces/UserContextInterface';
import { LoginRequestFormGroup } from '../interfaces/LoginRequestFormGroup';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendBaseUrl = environment.apiUrl;
  private apiUrl: string = '/auth';
  private http = inject(HttpClient);

  uploadLogin(loginRequest: FormGroup<LoginRequestFormGroup>): Observable<UserContextInterface | null> {
    if (!loginRequest) return of(null);

    return this.http.post<UserContextInterface>(`${this.backendBaseUrl}${this.apiUrl}/login`,
      loginRequest.getRawValue())
      .pipe(
        catchError((error: HttpErrorResponse) => {
          /* Al hacer peticiones asíncronas todos los errores que puedas recibir usando HttpClient
          tendrán como tipo HttpErrorResponse. Puedes evalúar el código de error para decidir como lo
          gestionas */
          return throwError(() => error);
        })
      );
  }

}
