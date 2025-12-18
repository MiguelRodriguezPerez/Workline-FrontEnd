import { Component, inject } from '@angular/core';
import { UserTitle } from "../../../shared/components/user-title/user-title";
import { Store } from '@ngrx/store';
import { selectUserExperiencias } from '../../../../shared/globalState/login/login.selector';
import { SectionTitle } from "../../../shared/components/section-title/section-title";
import { ExperienciaCardForm } from '../../../../shared/components/card-entities/experiencia-card-form/experiencia-card-form';
import { NewConocimientoWrapper } from "../../my-knowledge-page/new-busca-entity-wrapper/new-busca-entity-wrapper";
import { BuscaGridEntity } from "../../../../shared/components/busca-grid-entity/busca-grid-entity";
import { NoExperienceUser } from "../no-experience-user/no-experience-user";

@Component({
  selector: 'my-experience-container',
  imports: [UserTitle, SectionTitle, NewConocimientoWrapper, BuscaGridEntity, NoExperienceUser],
  templateUrl: './my-experience-container.html',
  styleUrl: './my-experience-container.scss',
})
export class MyExperienceContainer { 
  private store = inject(Store);
  arrConocimientos = this.store.selectSignal(selectUserExperiencias);
  cardComponent = ExperienciaCardForm;
}
