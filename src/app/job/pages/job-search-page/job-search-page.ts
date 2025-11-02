import { Component, inject, signal } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { JobResultCounter } from "../../components/job-search-page/job-result-counter/job-result-counter";
import { JobSearchForm } from "../../components/job-search-form/job-search-form";
import { rxResource } from '@angular/core/rxjs-interop';
import { BusquedaOferta } from '../../objects/interfaces/BusquedaOferta';
import { OfertaService } from '../../services/oferta.service';
import { Oferta } from '../../objects/interfaces/Oferta';
import { JsonPipe } from '@angular/common';
import { PaginaJobResponse } from '../../objects/interfaces/PaginaJobResponse';

@Component({
  selector: 'job-search-page',
  imports: [NavbarWrapper, Footer, JobResultCounter, JobSearchForm, JsonPipe],
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
