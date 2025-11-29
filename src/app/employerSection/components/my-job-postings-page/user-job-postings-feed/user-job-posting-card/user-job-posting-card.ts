import { TitleCasePipe } from '@angular/common';
import { Component, inject, input, linkedSignal, output } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { JobPostingCandidateCounter } from "../job-posting-candidate-counter/job-posting-candidate-counter";
import { OfertaService } from '../../../../../jobSearch/services/oferta.service';
import { ContrataService } from '../../../../service/contrata.service';
import { JobPostingContextService } from '../../../../context/JobPostingContextService';

@Component({
  selector: 'user-job-posting-card',
  imports: [JobPostingCandidateCounter],
  templateUrl: './user-job-posting-card.html',
  styleUrl: './user-job-posting-card.scss',
})
export class UserJobPostingCard {

  contrataService = inject(ContrataService);
  jobPosting = input.required<Oferta>();
  private jobPostingContext = inject(JobPostingContextService);
  private titleCasePipe = new TitleCasePipe();

  jobCardValues = linkedSignal(() => {
    const resultado = {
      salarioAnual: this.jobPosting().salarioAnual,
      modalidadTrabajo: this.titleCasePipe.transform(this.jobPosting().modalidadTrabajo),
      horas: this.jobPosting().horas,
      ciudad: this.jobPosting().ciudad
    };

    return Object.values(resultado);
  });

  deleteJobPostEvent () {
    this.contrataService.deleteOferta(this.jobPosting().id!).subscribe({
      next: () => this.jobPostingContext.removeJobPosting(this.jobPosting().id!)
    });
  }

}
