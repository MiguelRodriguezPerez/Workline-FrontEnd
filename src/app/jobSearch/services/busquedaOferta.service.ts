import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { commonHeaders } from '../../shared/objects/commonHeaders';
import { BusquedaOferta } from '../objects/interfaces/BusquedaOferta';
import { PaginaJobResponse } from '../objects/interfaces/PaginaJobResponse';
import { PaginaJobRequest } from '../objects/interfaces/PaginaJobRequest';
import { BusquedaOfertaMapper } from '../objects/mappers/BusquedaOfertaMapper';

@Injectable({
  providedIn: 'root'
})
export class BusquedaOfertaService {

  private apiUrl: string = environment.apiUrl;
  private baseJobEndpoint: string = '/ofertas/api';
  private http = inject(HttpClient);
  private router = inject(Router);
  private currentRoute = inject(ActivatedRoute);
  busquedaOfertaMapper = BusquedaOfertaMapper;

  /* A lo largo de la aplicación el queryParam numPag hará referencia al número de la página */

  constructor() { }

  searchOfertas(requestArg: PaginaJobRequest): Observable<PaginaJobResponse> {
    if (!requestArg) return of();

    return this.http.post<PaginaJobResponse>(`${this.apiUrl}${this.baseJobEndpoint}/busqueda`, requestArg)
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.log('Error fetching ofertas page');
          return throwError(() => new Error(error))
        })
      )
  }

  browseFormQueryParams(busquedaOferta: BusquedaOferta) {
    const queryParams: Params = {};
    Object.entries(busquedaOferta).forEach(([key, value]) => {
      if (value)
        Object.assign(queryParams, { [key]: value });
    });

    Object.assign(queryParams, { 'numPag': 0 });

    this.router.navigate([], {
      relativeTo: this.currentRoute,
      queryParams: queryParams
    })
  };

  browseEmptyQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.currentRoute,
      queryParams: {numPag: 0}
    })
  };

  browsePage(currentQueryParams: Params, numPagArg: number): void {
    const updatedParams: Params = {
      ...currentQueryParams,
      numPag: numPagArg
    }

    this.router.navigate([], {
      relativeTo: this.currentRoute,
      queryParams: updatedParams
    })
  }

}
