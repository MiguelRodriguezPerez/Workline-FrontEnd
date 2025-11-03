import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BusquedaOferta } from '../objects/interfaces/BusquedaOferta';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../objects/interfaces/Oferta';
import { PaginaJobSearchRequest } from '../objects/interfaces/PaginaJobSearchRequest';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { commonHeaders } from '../../shared/objects/commonHeaders';
import { BusquedaOfertaMapper } from '../objects/mappers/BusquedaOfertaMapper';
import { PaginaJobResponse } from '../objects/interfaces/PaginaJobResponse';
import { Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private apiUrl: string = environment.apiUrl;
  private baseJobEndpoint: string = '/ofertas/api';
  private http = inject(HttpClient);
  private router = inject(Router);
  busquedaOfertaMapper = BusquedaOfertaMapper;

  constructor() { }

  searchOfertas (busquedaOferta: BusquedaOferta): Observable<PaginaJobResponse> {
    if (!busquedaOferta) return of();

    const arg: PaginaJobSearchRequest = { pagina: 0, busquedaOferta: busquedaOferta};

    return this.http.post<PaginaJobResponse>(`${this.apiUrl}${this.baseJobEndpoint}/busqueda`, arg, { headers: commonHeaders })
      .pipe(
        tap(response => console.log(response)),
        // map(response => this.busquedaOfertaMapper.mapPaginaJobResponseToOfertaArr(response)),
        catchError(error => {
          console.log('Error fetching ofertas page');
          return throwError(() => new Error(error))
        })
      )
  }

  updateFormQueryParams (busquedaOferta: BusquedaOferta) {
    const queryParams: Params = {};
    Object.entries(busquedaOferta).forEach(([key,value]) => {
      if (value) 
        Object.assign(queryParams, { [key]: value });
    })

    console.log(queryParams);
    

    // this.router.navigate([], {

    // })
  }


}
