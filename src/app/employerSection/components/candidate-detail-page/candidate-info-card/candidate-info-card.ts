import { Component, input } from '@angular/core';
import { BuscaDto } from '../../../../shared/objects/interfaces/busca/BuscaDto';


@Component({
  selector: 'candidate-info-card',
  imports: [],
  templateUrl: './candidate-info-card.html',
  styleUrl: './candidate-info-card.scss',
})
export class CandidateInfoCard {
  
  buscaDto = input.required<BuscaDto>();

}
