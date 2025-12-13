import { Component, computed, input } from '@angular/core';
import { ConocimientoDto } from '../../objects/interfaces/busca/ConocimientoDto';
import { ExperienciaDto } from '../../objects/interfaces/busca/ExperienciaDto';
import { isConocimientoDto } from '../../helpers/isConocimientoDto';
import { isExperienciaDto } from '../../helpers/isExperienciaDto';
import { ConocimientoCardForm } from "../card-entities/conocimiento-card-form/conocimiento-card-form";
import { ExperienciaCardForm } from "../card-entities/experiencia-card-form/experiencia-card-form";
import { isOfertaDtoJobSearch, OfertaDtoJobSearch } from '../../objects/interfaces/oferta/OfertaDtoJobSearch';
import { JobSearchCard } from "../../../jobSearch/components/job-search-page/job-search-feed/job-search-card/job-search-card";

@Component({
  selector: 'busca-grid-entity',
  imports: [ConocimientoCardForm, ExperienciaCardForm, JobSearchCard],
  templateUrl: './busca-grid-entity.html',
  styleUrl: './busca-grid-entity.scss',
})
export class BuscaGridEntity { 
  entityArr = input.required<ConocimientoDto[] | ExperienciaDto[] | OfertaDtoJobSearch[]>();
  conocimientos = computed(() =>
    isConocimientoDto(this.entityArr()[0]) ? this.entityArr() as ConocimientoDto[] : null
  );

  experiencias = computed(() =>
    isExperienciaDto(this.entityArr()[0]) ? this.entityArr() as ExperienciaDto[] : null
  );

  ofertas = computed(() => 
    isOfertaDtoJobSearch(this.entityArr()[0]) ? this.entityArr() as OfertaDtoJobSearch[] : null
  )
}
