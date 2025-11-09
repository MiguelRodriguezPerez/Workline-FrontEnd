import { Component, inject, linkedSignal, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { JobPostBody } from "../../components/job-post-page/job-post-body/body/job-post-body";
import { JobPostHeader } from "../../components/job-post-page/job-post-header/job-post-header";
import { JobSearchFeedLoading } from "../../components/job-search-page/job-search-feed/job-search-feed-loading/job-search-feed-loading";
import { OfertaService } from '../../services/oferta.service';
import { Oferta } from './../../objects/interfaces/Oferta';

@Component({
  selector: 'job-post-page',
  imports: [NavbarWrapper, Footer, JobPostHeader, JobSearchFeedLoading, JobPostBody],
  templateUrl: './job-post-page.html',
  styleUrl: './job-post-page.scss',
})
export class JobPostPage {

  currentRoute = inject(ActivatedRoute);
  ofertaService = inject(OfertaService);
  /* ParamMap se diferencia de QueryParams porque no llevan los interrogantes con nombres 
  propios de las urls con formularios */
  private queryParamsSignal: Signal<ParamMap> = toSignal(this.currentRoute.paramMap, { initialValue: this.currentRoute.snapshot.paramMap });
  private jobId: Signal<number> = linkedSignal(() => parseInt(this.queryParamsSignal().get('id')!));
  /* El tipo de objeto que esperas es el primer argumento, el segundo es el que necesitas para requerirlo */
  jobIdRequest = rxResource<Oferta, number>({
    params: () => this.jobId()!,
    stream: ({ params }) => {
      return this.ofertaService.obtenerOfertaPorId(params);
    }
  });

}
