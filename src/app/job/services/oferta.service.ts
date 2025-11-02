import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BusquedaOferta } from '../objects/interfaces/BusquedaOferta';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../objects/interfaces/Oferta';
import { PaginaJobSearchRequest } from '../objects/interfaces/PaginaJobSearchRequest';
import { catchError, Observable, throwError } from 'rxjs';
import { commonHeaders } from '../../shared/objects/commonHeaders';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private apiUrl: string = environment.apiUrl;
  private baseJobEndpoint: string = '/ofertas/api';
  private http = inject(HttpClient);

  constructor() { }

  searchOfertas (busquedaOferta: BusquedaOferta): Observable<Oferta[]> {
    const arg: PaginaJobSearchRequest = { pagina: 0, busquedaOferta: busquedaOferta};

    return this.http.post<Oferta[]>(`${this.apiUrl}${this.baseJobEndpoint}/busqueda`, arg, { headers: commonHeaders })
      .pipe(
        catchError(error => {
          console.log('Error fetching ofertas page');
          return throwError(() => new Error(error))
        })
      )
  }


}
