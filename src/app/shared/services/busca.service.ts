import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BuscaDto } from '../objects/interfaces/busca/BuscaDto';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private backendBaseUrl = environment.apiUrl;
  private apiUrl: string = '/busca/api';
  private http = inject(HttpClient);

  getBuscaById (id: number) : Observable<BuscaDto> {
    return this.http.get<BuscaDto>(`${this.backendBaseUrl}${this.apiUrl}/obtenerPorId/${id}`)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Error retrieving candidate')
            return throwError(() => error)
          })
        )
  }
}
