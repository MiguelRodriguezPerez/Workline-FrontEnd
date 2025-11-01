import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BusquedaOferta } from '../objects/interfaces/BusquedaOferta';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl: string = environment.apiUrl;
  private baseJobEndpoint: string = '/ofertas/api';

  constructor() { }

  searchOfertas (busquedaOferta: BusquedaOferta) {
    
  }


}
