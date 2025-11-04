import { Component, inject, linkedSignal, OnInit, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { JobSearchFeedWrapper } from "../../components/job-search-feed/job-search-feed-wrapper/job-search-feed-wrapper";
import { JobResultCounter } from '../../components/job-search-page/job-result-counter/job-result-counter';
import { JobSearchForm } from '../../components/job-search-page/job-search-form/job-search-form';
import { BusquedaOferta } from '../../objects/interfaces/BusquedaOferta';
import { PaginaJobResponse } from '../../objects/interfaces/PaginaJobResponse';
import { BusquedaOfertaMapper } from '../../objects/mappers/BusquedaOfertaMapper';
import { OfertaService } from '../../services/oferta.service';

@Component({
  selector: 'job-search-page',
  imports: [NavbarWrapper, Footer, JobResultCounter, JobSearchForm, JobSearchFeedWrapper],
  templateUrl: './job-search-page.html',
  styleUrl: './job-search-page.scss',
})
export class JobSearchPage { 

  /* JobSearchPage escucha queryParams -> JobSearchForm manipula los params y navega a la url
  con los params manipulados -> JobSearchPage escucha los cambios y realiza una nueva búsqueda */

  private currentRoute = inject(ActivatedRoute);
  private queryParamsSignal = toSignal(this.currentRoute.queryParams, { initialValue: {} });
  private busquedaOfertaMapper = BusquedaOfertaMapper;
  private ofertaService = inject(OfertaService);
  private currentBusqueda: Signal<BusquedaOferta> = linkedSignal({
    source: this.queryParamsSignal,
    computation: (data): BusquedaOferta => {
       return this.busquedaOfertaMapper.mapQueryParamsToBusquedaOferta(data)
    }
  });

  busquedaOfertasResource = rxResource<PaginaJobResponse, BusquedaOferta>({
    params: () => this.currentBusqueda(),
    stream: ({ params }) => {
      return this.ofertaService.searchOfertas(params);
    }
  })

}
