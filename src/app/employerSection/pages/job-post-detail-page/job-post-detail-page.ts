import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OfertaService } from '../../../jobSearch/services/oferta.service';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { JobPostingForm } from "../../components/shared/job-posting-form/job-posting-form";

@Component({
  selector: 'job-post-detail-page',
  imports: [NavbarWrapper, Footer, JobPostingForm],
  templateUrl: './job-post-detail-page.html',
  styleUrl: './job-post-detail-page.scss',
})
export class JobPostDetailPage {
  
  private activatedRoute = inject(ActivatedRoute);
  private id = this.activatedRoute.snapshot.paramMap.get('id')!;
  private ofertaService = inject(OfertaService);
  jobPost = toSignal(this.ofertaService.obtenerOfertaPorId(parseInt(this.id)));



  
}
