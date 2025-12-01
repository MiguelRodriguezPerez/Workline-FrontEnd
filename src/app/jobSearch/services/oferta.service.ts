import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OfertaDtoJobSearch } from '../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { OfertaDtoEmployer } from '../../shared/objects/interfaces/oferta/OfertaDtoEmployer';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private apiUrl: string = environment.apiUrl;
  private base_url = '/ofertas/api';
  private http = inject(HttpClient);

  obtenerOfertaPorIdAsDtoJobSearch(id: number): Observable<OfertaDtoJobSearch> {
    return this.http.get<OfertaDtoJobSearch>(`${this.apiUrl}${this.base_url}/obtenerOfertaPorId/jobSearch/${id}`)
      .pipe(
        tap(resultado => console.log(resultado)),
        catchError(error => {
          console.log('Error fetching oferta by id');
          return throwError(() => new Error(error))
        })
      );
  }

  obtenerOfertaPorIdAsDtoEmployer(id: number): Observable<OfertaDtoEmployer> {
    return this.http.get<OfertaDtoEmployer>(`${this.apiUrl}${this.base_url}/obtenerOfertaPorId/employer/${id}`)
      .pipe(
        tap(resultado => console.log(resultado)),
        catchError(error => {
          console.log('Error fetching oferta by id');
          return throwError(() => new Error(error))
        })
      );
  }
}
