import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { PaginaJobRequest } from '../../jobSearch/objects/interfaces/PaginaJobRequest';
import { PaginaJobResponse } from '../../jobSearch/objects/interfaces/PaginaJobResponse';
import { OfertaDtoJobSearch } from '../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
import { EmployerPageResponse } from '../interfaces/EmployerPageResponse';
import { OfertaDtoEmployer } from '../../shared/objects/interfaces/oferta/OfertaDtoEmployer';

@Injectable({
  providedIn: 'root'
})
export class ContrataService {

  private http = inject(HttpClient);

  private backendUrl: string = environment.apiUrl;
  private baseContrataEndpoint: string = '/contrata/api';

  getOfertasContrataPage(pageNum: number): Observable<EmployerPageResponse> {
    return this.http.get<EmployerPageResponse>(`${this.backendUrl}${this.baseContrataEndpoint}/ofertas/pagina/${pageNum}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching user job postings');
          return throwError(() => error)
        })
      )
  };

  uploadNewOferta(oferta: OfertaDtoEmployer): Observable<OfertaDtoEmployer> {
    return this.http.post<OfertaDtoEmployer>(`${this.backendUrl}${this.baseContrataEndpoint}/nuevaOferta`, oferta)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error creating new job post');
          return throwError(() => error)
        })
      )
  };

  updateOferta(oferta: OfertaDtoEmployer): Observable<OfertaDtoEmployer> {
    return this.http.put<OfertaDtoEmployer>(`${this.backendUrl}${this.baseContrataEndpoint}/editarOferta`, oferta)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error updating job post');
          return throwError(() => error)
        })
      )
  };

  deleteOferta(ofertaId: number): Observable<OfertaDtoJobSearch> {
    return this.http.delete<OfertaDtoJobSearch>(`${this.backendUrl}${this.baseContrataEndpoint}/borrarOferta/${ofertaId}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error deleting job post');
          return throwError(() => error)
        })
      )
  }
}
