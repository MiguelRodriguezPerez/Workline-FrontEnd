import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Oferta } from '../../shared/objects/interfaces/oferta/Oferta';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private apiUrl: string = environment.apiUrl;
  private base_url = '/ofertas/api';
  private http = inject(HttpClient);

  obtenerOfertaPorId(id: number): Observable<Oferta> {
    return this.http.get<Oferta>(`${this.apiUrl}${this.base_url}/obtenerOfertaPorId/${id}`)
      .pipe(
        tap(resultado => console.log(resultado)),
        catchError(error => {
          console.log('Error fetching oferta by id');
          return throwError(() => new Error(error))
        })
      );
  }
}
