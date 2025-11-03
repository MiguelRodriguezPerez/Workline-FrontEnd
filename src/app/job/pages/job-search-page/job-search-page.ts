import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { JobSearchFeed } from "../../components/job-search-feed/job-search-feed";
import { BusquedaOferta } from '../../objects/interfaces/BusquedaOferta';
import { PaginaJobResponse } from '../../objects/interfaces/PaginaJobResponse';
import { OfertaService } from '../../services/oferta.service';
import { JobSearchForm } from '../../components/job-search-page/job-search-form/job-search-form';
import { JobResultCounter } from '../../components/job-search-page/job-result-counter/job-result-counter';

@Component({
  selector: 'job-search-page',
  imports: [NavbarWrapper, Footer, JobResultCounter, JobSearchForm, JobSearchFeed],
  templateUrl: './job-search-page.html',
  styleUrl: './job-search-page.scss',
})
export class JobSearchPage { 

  ofertaService = inject(OfertaService);

  dummyParam: BusquedaOferta = {
    puesto: "",
    tipoContrato: null,
    ciudad: "",
    salarioAnualMinimo: 0,
    modalidadTrabajo: null
  };

  busquedaOfertasResource = rxResource<PaginaJobResponse, BusquedaOferta>({
    params: () => this.dummyParam,
    stream: ({ params }) => {
      return this.ofertaService.searchOfertas(this.dummyParam);
    }
  })
}
