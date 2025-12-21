import { Component, input } from '@angular/core';
import { BuscaDto } from '../../../../shared/objects/interfaces/busca/BuscaDto';
import { GoBackLink } from "../../../../shared/components/go-back-link/go-back-link";


@Component({
  selector: 'candidate-info-card',
  imports: [GoBackLink],
  templateUrl: './candidate-info-card.html',
  styleUrl: './candidate-info-card.scss',
})
export class CandidateInfoCard {
  
  buscaDto = input.required<BuscaDto>();

}
