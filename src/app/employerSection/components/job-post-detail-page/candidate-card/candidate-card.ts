import { Component, input } from '@angular/core';
import { BuscaDto } from '../../../../shared/objects/interfaces/busca/BuscaDto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'candidate-card',
  imports: [RouterLink],
  templateUrl: './candidate-card.html',
  styleUrl: './candidate-card.scss',
})
export class CandidateCard { 

  candidate = input.required<BuscaDto>();

}
