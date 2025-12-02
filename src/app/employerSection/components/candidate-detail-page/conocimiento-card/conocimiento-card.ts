import { Component, input } from '@angular/core';
import { ConocimientoDto } from '../../../../shared/objects/interfaces/busca/ConocimientoDto';

@Component({
  selector: 'conocimiento-card',
  imports: [],
  templateUrl: './conocimiento-card.html',
  styleUrl: './conocimiento-card.scss',
})
export class ConocimientoCard { 
  conocimientoInput = input.required<ConocimientoDto>();
}
