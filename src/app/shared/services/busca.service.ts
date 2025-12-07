import { format } from "date-fns";
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
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
    )
    .pipe(
        map(response => {
          response.inicioPeriodoConocimiento = format(new Date(response.inicioPeriodoConocimiento), "dd/MM/yyyy")
          response.finPeriodoConocimiento = format(new Date(response.finPeriodoConocimiento), "dd/MM/yyyy")
          return response
        }), 
        catchError((error: HttpErrorResponse) => {
          console.error('Error uploading new conocimiento')
          return throwError(() => error)
        })
    );
  }

  updateConocimiento (conocimiento: ConocimientoDto): Observable<ConocimientoDto> {
    return this.http.put<ConocimientoDto>(
      `${this.backendBaseUrl}${this.apiUrl}/editarConocimiento`, 
      conocimiento
    )
    .pipe(
        map(response => {
            response.inicioPeriodoConocimiento = format(new Date(response.inicioPeriodoConocimiento), "dd/MM/yyyy")
            response.finPeriodoConocimiento = format(new Date(response.finPeriodoConocimiento), "dd/MM/yyyy")
            return response
          }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error updating conocimiento')
          return throwError(() => error)
        })
    );
  }

  deleteConocimiento (id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.backendBaseUrl}${this.apiUrl}/borrarConocimiento/${id}`
    )
    .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error updating conocimiento')
          return throwError(() => error)
        })
    );
  }

  uploadNewExperiencia (experiencia: ExperienciaDto): Observable<ExperienciaDto> {
    return this.http.post<ExperienciaDto>(
      `${this.backendBaseUrl}${this.apiUrl}/nuevaExperiencia`,
      experiencia
    )
    .pipe(
      map(response => {
        response.inicioExperiencia = format(new Date(response.inicioExperiencia), "dd/MM/yyyy");
        response.finExperiencia = format(new Date(response.finExperiencia), "dd/MM/yyyy");
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error uploading new experiencia');
        return throwError(() => error);
      })
    );
  }

  updateExperiencia (experiencia: ExperienciaDto): Observable<ExperienciaDto> {
    return this.http.put<ExperienciaDto>(
      `${this.backendBaseUrl}${this.apiUrl}/editarExperiencia`,
      experiencia
    )
    .pipe(
      map(response => {
        response.inicioExperiencia = format(new Date(response.inicioExperiencia), "dd/MM/yyyy");
        response.finExperiencia = format(new Date(response.finExperiencia), "dd/MM/yyyy");
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error updating experiencia');
        return throwError(() => error);
      })
    );
  }

  deleteExperiencia (id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.backendBaseUrl}${this.apiUrl}/borrarExperiencia/${id}`
    )
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error deleting experiencia');
        return throwError(() => error);
      })
    );
  }

}
