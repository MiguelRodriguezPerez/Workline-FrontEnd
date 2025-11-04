import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { commonHeaders } from '../../shared/objects/commonHeaders';
import { BusquedaOferta } from '../objects/interfaces/BusquedaOferta';
import { PaginaJobResponse } from '../objects/interfaces/PaginaJobResponse';
import { PaginaJobSearchRequest } from '../objects/interfaces/PaginaJobSearchRequest';
import { BusquedaOfertaMapper } from '../objects/mappers/BusquedaOfertaMapper';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private apiUrl: string = environment.apiUrl;
  private baseJobEndpoint: string = '/ofertas/api';
  private http = inject(HttpClient);
  private router = inject(Router);
  private currentRoute = inject(ActivatedRoute);
  busquedaOfertaMapper = BusquedaOfertaMapper;

  constructor() { }

  searchOfertas (busquedaOferta: BusquedaOferta): Observable<PaginaJobResponse> {

    console.log(busquedaOferta);
    
    if (!busquedaOferta) return of();

    const arg: PaginaJobSearchRequest = { pagina: 0, busquedaOferta: busquedaOferta};

    return this.http.post<PaginaJobResponse>(`${this.apiUrl}${this.baseJobEndpoint}/busqueda`, arg, { headers: commonHeaders })
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.log('Error fetching ofertas page');
          return throwError(() => new Error(error))
        })
      )
  }

  browseFormQueryParams (busquedaOferta: BusquedaOferta) {
    const queryParams: Params = {};
    Object.entries(busquedaOferta).forEach(([key,value]) => {
      if (value) 
        Object.assign(queryParams, { [key]: value });
    });

    this.router.navigate([], {
      relativeTo: this.currentRoute,
      queryParams: queryParams
    })
  };

  browseEmptyQueryParams (): void {
    this.router.navigate([], {
      relativeTo: this.currentRoute,
      queryParams: null
    })
  }


}
