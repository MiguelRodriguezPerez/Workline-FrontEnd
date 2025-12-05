import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BuscaDto } from '../objects/interfaces/busca/BuscaDto';
import { ConocimientoDto } from '../objects/interfaces/busca/ConocimientoDto';
import { ExperienciaDto } from '../objects/interfaces/busca/ExperienciaDto';

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

  uploadNewConocimiento (conocimiento: ConocimientoDto): Observable<ConocimientoDto> {
    return this.http.post<ConocimientoDto>(
      `${this.backendBaseUrl}${this.apiUrl}/nuevoConocimiento`, 
      conocimiento
    ).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error uploading new conocimiento')
          return throwError(() => error)
        })
    );
  }

  uploadNewExperiencia(experiencia: ExperienciaDto): Observable<ExperienciaDto> {
    return this.http.post<ExperienciaDto>(
      `${this.backendBaseUrl}${this.apiUrl}/nuevaExperiencia`,
      experiencia
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error uploading new experiencia');
        return throwError(() => error);
      })
    );
  }
}
