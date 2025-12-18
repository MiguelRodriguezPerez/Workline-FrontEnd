import { Component } from '@angular/core';
import { ConocimientoCardForm } from '../../../../shared/components/card-entities/conocimiento-card-form/conocimiento-card-form';
import { NewConocimientoWrapper } from "../new-busca-entity-wrapper/new-busca-entity-wrapper";

@Component({
  selector: 'no-knowledge-user',
  imports: [NewConocimientoWrapper],
  templateUrl: './no-knowledge-user.html',
  styleUrl: './no-knowledge-user.scss',
})
export class NoKnowledgeUser { 
  cardComponent = ConocimientoCardForm;
}
