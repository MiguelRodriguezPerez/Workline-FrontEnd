import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { PaginaJobRequest } from '../../jobSearch/objects/interfaces/PaginaJobRequest';
import { PaginaJobResponse } from '../../jobSearch/objects/interfaces/PaginaJobResponse';

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
}
