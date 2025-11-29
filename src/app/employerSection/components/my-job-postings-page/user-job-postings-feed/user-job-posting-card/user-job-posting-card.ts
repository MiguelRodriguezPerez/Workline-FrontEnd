import { TitleCasePipe } from '@angular/common';
import { Component, inject, input, linkedSignal, output } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { JobPostingCandidateCounter } from "../job-posting-candidate-counter/job-posting-candidate-counter";
import { OfertaService } from '../../../../../jobSearch/services/oferta.service';
import { ContrataService } from '../../../../service/contrata.service';
import { JobPostingContextService } from '../../../../context/JobPostingContextService';
import { Router } from '@angular/router';

@Component({
  selector: 'user-job-posting-card',
  imports: [JobPostingCandidateCounter],
  templateUrl: './user-job-posting-card.html',
  styleUrl: './user-job-posting-card.scss',
})
export class UserJobPostingCard {

  private jobPostingContext = inject(JobPostingContextService);
  private router = inject(Router);
  private titleCasePipe = new TitleCasePipe();

  contrataService = inject(ContrataService);
  jobPosting = input.required<Oferta>();

  jobCardValues = linkedSignal(() => {
    const resultado = {
      salarioAnual: this.jobPosting().salarioAnual,
      modalidadTrabajo: this.titleCasePipe.transform(this.jobPosting().modalidadTrabajo),
      horas: this.jobPosting().horas,
      ciudad: this.jobPosting().ciudad
    };

    return Object.values(resultado);
  });

  deleteJobPostEvent (event: Event) {
    event.stopPropagation();

    this.contrataService.deleteOferta(this.jobPosting().id!).subscribe({
      next: () => this.jobPostingContext.removeJobPosting(this.jobPosting().id!)
    });
  }

  redirectJobDetail () {
    this.router.navigate(['employerSection','jobPostDetail', this.jobPosting().id]);
  }

}
