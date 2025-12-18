import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BuscaGridEntity } from "../../../../shared/components/busca-grid-entity/busca-grid-entity";
import { BuscaService } from '../../../../shared/services/busca.service';
import { SectionTitle } from "../../../shared/components/section-title/section-title";
import { UserTitle } from "../../../shared/components/user-title/user-title";
import { NoJobsInscribed } from "../no-jobs-inscribed/no-jobs-inscribed";

@Component({
  selector: 'my-job-inscriptions-container',
  imports: [UserTitle, BuscaGridEntity, SectionTitle, NoJobsInscribed],
  templateUrl: './my-job-inscriptions-container.html',
  styleUrl: './my-job-inscriptions-container.scss',
})
export class MyJobInscriptionsContainer { 
  buscaService = inject(BuscaService);

  jobInscriptionsList = toSignal(
    this.buscaService.getBuscaListaOfertas(),
    { initialValue: null }
  );
  
}
