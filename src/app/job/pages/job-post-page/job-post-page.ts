import { JsonPipe } from '@angular/common';
import { Component, inject, linkedSignal, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OfertaService } from '../../services/oferta.service';
import { Oferta } from './../../objects/interfaces/Oferta';

@Component({
  selector: 'job-post-page',
  imports: [ JsonPipe ],
  templateUrl: './job-post-page.html',
  styleUrl: './job-post-page.scss',
})
export class JobPostPage {

  currentRoute = inject(ActivatedRoute);
  ofertaService = inject(OfertaService);
  /* ParamMap se diferencia de QueryParams porque no llevan los interrogantes con nombres 
  propios de las urls con formularios */
  private queryParamsSignal: Signal<ParamMap> = toSignal(this.currentRoute.paramMap, { initialValue: this.currentRoute.snapshot.paramMap });
  private jobId = linkedSignal(() => parseInt(this.queryParamsSignal().get('id')!));
  /* El tipo de objeto que esperas es el primer argumento, el segundo es el que necesitas para requerirlo */
  jobIdRequest = rxResource<Oferta, number>({
    params: () => this.jobId(),
    stream: ({ params }) => {
      return this.ofertaService.obtenerOfertaPorId(params);
    }
  })

}
