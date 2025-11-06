import { Component, computed, inject, linkedSignal, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { JobResultCounter } from '../../components/job-search-page/job-result-counter/job-result-counter';
import { JobSearchFeedWrapper } from '../../components/job-search-page/job-search-feed/job-search-feed-wrapper/job-search-feed-wrapper';
import { JobSearchForm } from '../../components/job-search-page/job-search-form/job-search-form';
import { JobSearchPagination } from "../../components/job-search-page/job-search-pagination/job-search-pagination";
import { PaginaJobRequest } from '../../objects/interfaces/PaginaJobRequest';
import { PaginaJobResponse } from '../../objects/interfaces/PaginaJobResponse';
import { BusquedaOfertaMapper } from '../../objects/mappers/BusquedaOfertaMapper';
import { OfertaService } from '../../services/oferta.service';


@Component({
  selector: 'job-search-page',
  imports: [NavbarWrapper, Footer, JobResultCounter, JobSearchForm, JobSearchFeedWrapper, JobSearchPagination],
  templateUrl: './job-search-page.html',
  styleUrl: './job-search-page.scss',
})
export class JobSearchPage { 

  /* JobSearchPage escucha queryParams -> JobSearchForm manipula los params y navega a la url
  con los params manipulados -> JobSearchPage escucha los cambios y realiza una nueva búsqueda */

  private currentRoute = inject(ActivatedRoute);
  private queryParamsSignal: Signal<Params> = toSignal(this.currentRoute.queryParams, { initialValue: {} });
  private currentNumPag = computed<number>(() => {
    const params = this.queryParamsSignal();
    return Number(params['numPag'] ?? 0);
  });
  private busquedaOfertaMapper = BusquedaOfertaMapper;
  private ofertaService = inject(OfertaService);
  private currentBusqueda: Signal<PaginaJobRequest> = linkedSignal(() => {
    const resultado: PaginaJobRequest = {
      pagina: this.currentNumPag(),
      busquedaOferta: this.busquedaOfertaMapper.mapQueryParamsToBusquedaOferta(this.queryParamsSignal)
    }
    return resultado;
  });

  busquedaOfertasResource = rxResource<PaginaJobResponse, PaginaJobRequest>({
    params: () => this.currentBusqueda(),
    stream: ({params}) => {
      return this.ofertaService.searchOfertas(params);
    }
  });

  changePageEvent (arg: PaginatorState): void {
    this.ofertaService.browsePage(this.queryParamsSignal(), arg.page ?? 0);
  }

}
