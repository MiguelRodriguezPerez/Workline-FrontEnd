import { Component, inject, output, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { JobSearchFeedWrapper } from "../../components/job-search-feed/job-search-feed-wrapper/job-search-feed-wrapper";
import { JobResultCounter } from '../../components/job-search-page/job-result-counter/job-result-counter';
import { JobSearchForm } from '../../components/job-search-page/job-search-form/job-search-form';
import { BusquedaOferta } from '../../objects/interfaces/BusquedaOferta';
import { PaginaJobResponse } from '../../objects/interfaces/PaginaJobResponse';
import { OfertaService } from '../../services/oferta.service';
import { of } from 'rxjs';

@Component({
  selector: 'job-search-page',
  imports: [NavbarWrapper, Footer, JobResultCounter, JobSearchForm, JobSearchFeedWrapper],
  templateUrl: './job-search-page.html',
  styleUrl: './job-search-page.scss',
})
export class JobSearchPage { 

  ofertaService = inject(OfertaService);
  busquedaPeticion = signal<BusquedaOferta>({
      puesto: "",
      tipoContrato: null,
      ciudad: "",
      salarioAnualMinimo: 0,
      modalidadTrabajo: null
  });

  recibirBusqueda (busquedaOferta: BusquedaOferta) {
    this.busquedaPeticion.set(busquedaOferta);
  }

  busquedaOfertasResource = rxResource<PaginaJobResponse, BusquedaOferta>({
    params: () => this.busquedaPeticion(),
    stream: ({ params }) => {
      return this.ofertaService.searchOfertas(this.busquedaPeticion()!);
    }
  })
}
