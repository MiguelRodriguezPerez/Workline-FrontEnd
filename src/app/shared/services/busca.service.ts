import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BuscaDto } from '../objects/interfaces/busca/BuscaDto';
import { ConocimientoDto } from '../objects/interfaces/busca/ConocimientoDto';
import { ExperienciaDto } from '../objects/interfaces/busca/ExperienciaDto';
import { formatDateFields } from '../helpers/formatDateFields';
import { OfertaDtoJobSearch } from '../objects/interfaces/oferta/OfertaDtoJobSearch';




@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private backendBaseUrl = environment.apiUrl;
  private apiUrl: string = '/busca/api';
  private http = inject(HttpClient);

  getBuscaById(id: number): Observable<BuscaDto> {
    return this.http.get<BuscaDto>(`${this.backendBaseUrl}${this.apiUrl}/obtenerPorId/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error retrieving candidate')
          return throwError(() => error)
        })
      )
  }

  uploadNewConocimiento(conocimiento: ConocimientoDto): Observable<ConocimientoDto> {
    return this.http.post<ConocimientoDto>(
      `${this.backendBaseUrl}${this.apiUrl}/nuevoConocimiento`,
      conocimiento
    )
      .pipe(
        map(res => formatDateFields<ConocimientoDto>(res, [
          'inicioPeriodoConocimiento',
          'finPeriodoConocimiento'
        ])),
        catchError((error: HttpErrorResponse) => {
          console.error('Error uploading new conocimiento')
          return throwError(() => error)
        })
      );
  }

  updateConocimiento(conocimiento: ConocimientoDto): Observable<ConocimientoDto> {
    return this.http.put<ConocimientoDto>(
      `${this.backendBaseUrl}${this.apiUrl}/editarConocimiento`,
      conocimiento
    )
      .pipe(
        map(res => formatDateFields<ConocimientoDto>(res, [
          'inicioPeriodoConocimiento',
          'finPeriodoConocimiento'
        ])),
        catchError((error: HttpErrorResponse) => {
          console.error('Error updating conocimiento')
          return throwError(() => error)
        })
      );
  }

  deleteConocimiento(id: number): Observable<void> {
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

  uploadNewExperiencia(experiencia: ExperienciaDto): Observable<ExperienciaDto> {
    return this.http.post<ExperienciaDto>(
      `${this.backendBaseUrl}${this.apiUrl}/nuevaExperiencia`,
      experiencia
    )
      .pipe(
        map(res => formatDateFields<ExperienciaDto>(res, [
          'inicioExperiencia',
          'finExperiencia'
        ])),
        catchError((error: HttpErrorResponse) => {
          console.error('Error uploading new experiencia');
          return throwError(() => error);
        })
      );
  }

  updateExperiencia(experiencia: ExperienciaDto): Observable<ExperienciaDto> {
    return this.http.put<ExperienciaDto>(
      `${this.backendBaseUrl}${this.apiUrl}/editarExperiencia`,
      experiencia
    )
      .pipe(
        map(res => formatDateFields<ExperienciaDto>(res, [
          'inicioExperiencia',
          'finExperiencia'
        ])),
        catchError((error: HttpErrorResponse) => {
          console.error('Error updating experiencia');
          return throwError(() => error);
        })
      );
  }

  deleteExperiencia(id: number): Observable<void> {
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

  getBuscaListaOfertas(): Observable<OfertaDtoJobSearch[]> {
    return this.http.get<OfertaDtoJobSearch[]>(`${this.backendBaseUrl}${this.apiUrl}/miListaOfertas`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching list ofertas user inscribed in');
          return throwError(() => error);
        })
      )
  }

  isUserInscribedInJobPosting(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.backendBaseUrl}${this.apiUrl}/estaInscritoOferta/${id}`);
  }

}
