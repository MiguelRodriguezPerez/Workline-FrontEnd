import { Component, computed, effect, input, signal } from '@angular/core';
import { ConocimientoDto } from '../../../../shared/objects/interfaces/busca/ConocimientoDto';
import { ExperienciaDto } from '../../../../shared/objects/interfaces/busca/ExperienciaDto';
import { isConocimientoDto } from '../../../../shared/helpers/isConocimientoDto';
import { isExperienciaDto } from '../../../../shared/helpers/isExperienciaDto';
import { ConocimientoCard } from "../conocimiento-card/conocimiento-card";
import { ExperienciaCard } from "../experiencia-card/experiencia-card";




@Component({
  selector: 'candidate-entity-grid',
  imports: [ConocimientoCard, ExperienciaCard],
  templateUrl: './candidate-entity-grid.html',
  styleUrl: './candidate-entity-grid.scss',
})
export class CandidateEntityGrid { 
  entityArr = input.required<ConocimientoDto[] | ExperienciaDto[]>();
  conocimientos = computed(() =>
    isConocimientoDto(this.entityArr()[0]) ? this.entityArr() as ConocimientoDto[] : null
  );

  experiencias = computed(() =>
    isExperienciaDto(this.entityArr()[0]) ? this.entityArr() as ExperienciaDto[] : null
  );

}
