import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../../../jobSearch/services/oferta.service';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { OfertaDtoEmployer } from '../../../shared/objects/interfaces/oferta/OfertaDtoEmployer';
import { CandidateGrid } from "../../components/job-post-detail-page/candidate-grid/candidate-grid";
import { JobPostingForm } from "../../components/shared/job-posting-form/job-posting-form";

@Component({
  selector: 'job-post-detail-page',
  imports: [NavbarWrapper, Footer, JobPostingForm, CandidateGrid],
  templateUrl: './job-post-detail-page.html',
  styleUrl: './job-post-detail-page.scss',
})
export class JobPostDetailPage {

  private activatedRoute = inject(ActivatedRoute);
  private id = computed(() =>
    parseInt(this.activatedRoute.snapshot.paramMap.get('id')!)
  );
  private ofertaService = inject(OfertaService);

  jobPostResource = rxResource({
    params: () => this.id(),
    stream: ({ params: id }) => this.ofertaService.obtenerOfertaPorIdAsDtoEmployer(id),
    defaultValue: {} as OfertaDtoEmployer,
  });



}
