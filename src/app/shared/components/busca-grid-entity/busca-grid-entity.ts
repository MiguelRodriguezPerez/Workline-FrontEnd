import { Component, computed, input } from '@angular/core';
import { ConocimientoDto } from '../../objects/interfaces/busca/ConocimientoDto';
import { ExperienciaDto } from '../../objects/interfaces/busca/ExperienciaDto';
import { isConocimientoDto } from '../../helpers/isConocimientoDto';
import { isExperienciaDto } from '../../helpers/isExperienciaDto';
import { ConocimientoCardForm } from "../card-entities/conocimiento-card-form/conocimiento-card-form";
import { ExperienciaCardForm } from "../card-entities/experiencia-card-form/experiencia-card-form";

@Component({
  selector: 'busca-grid-entity',
  imports: [ConocimientoCardForm, ExperienciaCardForm],
  templateUrl: './busca-grid-entity.html',
  styleUrl: './busca-grid-entity.scss',
})
export class BuscaGridEntity { 
  entityArr = input.required<ConocimientoDto[] | ExperienciaDto[]>();
  conocimientos = computed(() =>
    isConocimientoDto(this.entityArr()[0]) ? this.entityArr() as ConocimientoDto[] : null
  );

  experiencias = computed(() =>
    isExperienciaDto(this.entityArr()[0]) ? this.entityArr() as ExperienciaDto[] : null
  );
}
