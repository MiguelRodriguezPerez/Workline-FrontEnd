import { Component, input } from '@angular/core';
import { ExperienciaDto } from '../../../../shared/objects/interfaces/busca/ExperienciaDto';

@Component({
  selector: 'experiencia-card',
  imports: [],
  templateUrl: './experiencia-card.html',
  styleUrl: './experiencia-card.scss',
})
export class ExperienciaCard { 
  experienciaInput = input.required<ExperienciaDto>();
}
