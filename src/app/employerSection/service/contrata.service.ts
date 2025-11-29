import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { PaginaJobRequest } from '../../jobSearch/objects/interfaces/PaginaJobRequest';
import { PaginaJobResponse } from '../../jobSearch/objects/interfaces/PaginaJobResponse';
import { Oferta } from '../../shared/objects/interfaces/oferta/Oferta';

@Injectable({
  providedIn: 'root'
})
export class ContrataService {

  private http = inject(HttpClient);

  private backendUrl: string = environment.apiUrl;
  private baseContrataEndpoint: string = '/contrata/api';

  getOfertasContrataPage(pageNum: number): Observable<PaginaJobResponse> {
    return this.http.get<PaginaJobResponse>(`${this.backendUrl}${this.baseContrataEndpoint}/ofertas/pagina/${pageNum}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching user job postings');
          return throwError(() => error)
        })
      )
  }

  uploadNewOferta (oferta: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(`${this.backendUrl}${this.baseContrataEndpoint}/nuevaOferta`, oferta)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error creating new job post');
          return throwError(() => error)
        })
      )
  }
}
