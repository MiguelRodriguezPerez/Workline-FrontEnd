import { TitleCasePipe } from '@angular/common';
import { Component, input, linkedSignal } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';

@Component({
  selector: 'user-job-posting-card',
  imports: [TitleCasePipe],
  templateUrl: './user-job-posting-card.html',
  styleUrl: './user-job-posting-card.scss',
})
export class UserJobPostingCard { 
  
  private titleCasePipe = new TitleCasePipe();
  jobPosting = input.required<Oferta>();
  jobCardValues = linkedSignal(() => {
    const resultado = {
      salarioAnual: this.jobPosting().salarioAnual,
      modalidadTrabajo: this.titleCasePipe.transform(this.jobPosting().modalidadTrabajo),
      horas: this.jobPosting().horas,
      ciudad: this.jobPosting().ciudad
    }
    return Object.values(resultado);
  })


}
