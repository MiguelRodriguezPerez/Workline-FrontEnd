import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContrataService {

  private http = inject(HttpClient);

  private backendBaseUrl: string = environment.apiUrl;
  private baseContrataEndpoint: string = '/contrata/api';

  getOfertasContrataPage(pageNum: number) {

  }
}
