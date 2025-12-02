import { Component, input } from '@angular/core';
import { BuscaDto } from '../../../../shared/objects/interfaces/busca/BuscaDto';
import { CandidateCard } from "../candidate-card/candidate-card";

@Component({
  selector: 'candidate-grid',
  imports: [CandidateCard],
  templateUrl: './candidate-grid.html',
  styleUrl: './candidate-grid.scss',
})
export class CandidateGrid { 

  buscaDtoArr = input.required<BuscaDto[]>();
}
