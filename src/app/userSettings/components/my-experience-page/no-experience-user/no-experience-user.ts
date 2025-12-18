import { Component } from '@angular/core';
import { NewConocimientoWrapper } from "../../my-knowledge-page/new-busca-entity-wrapper/new-busca-entity-wrapper";
import { ExperienciaCardForm } from '../../../../shared/components/card-entities/experiencia-card-form/experiencia-card-form';

@Component({
  selector: 'no-experience-user',
  imports: [NewConocimientoWrapper],
  templateUrl: './no-experience-user.html',
  styleUrl: './no-experience-user.scss',
})
export class NoExperienceUser { 
  cardComponent = ExperienciaCardForm;
}
