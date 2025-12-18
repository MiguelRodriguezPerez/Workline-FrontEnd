import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { BuscaGridEntity } from "../../../../shared/components/busca-grid-entity/busca-grid-entity";
import { selectUserConocimientos } from '../../../../shared/globalState/login/login.selector';
import { SectionTitle } from "../../../shared/components/section-title/section-title";
import { UserTitle } from "../../../shared/components/user-title/user-title";
import { NoKnowledgeUser } from "../no-knowledge-user/no-knowledge-user";
import { ConocimientoCardForm } from '../../../../shared/components/card-entities/conocimiento-card-form/conocimiento-card-form';
import { NewConocimientoWrapper } from "../new-busca-entity-wrapper/new-busca-entity-wrapper";


@Component({
  selector: 'my-knowledge-container',
  imports: [SectionTitle, UserTitle, BuscaGridEntity, NoKnowledgeUser, NewConocimientoWrapper],
  templateUrl: './my-knowledge-container.html',
  styleUrl: './my-knowledge-container.scss',
})
export class MyKnowledgeContainer { 
  private store = inject(Store);
  arrConocimientos = this.store.selectSignal(selectUserConocimientos);
  cardComponent = ConocimientoCardForm;
}
