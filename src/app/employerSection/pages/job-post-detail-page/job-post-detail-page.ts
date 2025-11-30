import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../../../jobSearch/services/oferta.service';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Oferta } from '../../../shared/objects/interfaces/oferta/Oferta';
import { JobPostingForm } from "../../components/shared/job-posting-form/job-posting-form";

@Component({
  selector: 'job-post-detail-page',
  imports: [NavbarWrapper, Footer, JobPostingForm],
  templateUrl: './job-post-detail-page.html',
  styleUrl: './job-post-detail-page.scss',
})
export class JobPostDetailPage {
  
  private activatedRoute = inject(ActivatedRoute);
  private id = computed(() =>
    parseInt(this.activatedRoute.snapshot.paramMap.get('id')!)
  );

  private ofertaService = inject(OfertaService);

  jobPost = rxResource({
    params: () => this.id(),
    stream: ({ params: id }) => this.ofertaService.obtenerOfertaPorId(id),
    defaultValue: {} as Oferta,
  });

  
}
