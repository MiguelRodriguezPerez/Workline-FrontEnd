import { Component, input } from '@angular/core';
import { BuscaDto } from '../../../../shared/objects/interfaces/busca/BuscaDto';

@Component({
  selector: 'candidate-card',
  imports: [],
  templateUrl: './candidate-card.html',
  styleUrl: './candidate-card.scss',
})
export class CandidateCard { 
  candidate = input.required<BuscaDto>();

  redirectEvent () {
    
  }
}
