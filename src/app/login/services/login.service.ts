import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../interfaces/LoginRequest';
import { catchError, Observable, of } from 'rxjs';
import { UserContextInterface } from '../../shared/interfaces/UserContextInterface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendBaseUrl = environment.apiUrl;
  private apiUrl: string = '/auth';
  private http = inject(HttpClient);

  uploadLogin(loginRequest: LoginRequest): Observable<UserContextInterface | null> {
    if (!loginRequest) return of(null);

    return this.http.post<UserContextInterface>(`${this.backendBaseUrl}${this.apiUrl}/login`,loginRequest)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          /* Al hacer peticiones asíncronas todos los errores que puedas recibir usando HttpClient
          tendrán como tipo HttpErrorResponse. Puedes evalúar el código de error para decidir como lo
          gestionas */
          return of(null);
        })
      );
  }

}
