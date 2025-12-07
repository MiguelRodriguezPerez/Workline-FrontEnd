import { Component, computed, inject, Signal, signal } from '@angular/core';
import { ConocimientoCardForm } from "../../../../shared/components/card-entities/conocimiento-card-form/conocimiento-card-form";
import { ExperienciaCardForm } from "../../../../shared/components/card-entities/experiencia-card-form/experiencia-card-form";
import { BuscaGridEntity } from "../../../../shared/components/busca-grid-entity/busca-grid-entity";
import { Store } from '@ngrx/store';
import { ConocimientoDto } from '../../../../shared/objects/interfaces/busca/ConocimientoDto';
import { selectUserConocimientos, selectUserExperiencias } from '../../../../shared/globalState/login/login.selector';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExperienciaDto } from '../../../../shared/objects/interfaces/busca/ExperienciaDto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'second-step-form-container',
  imports: [ConocimientoCardForm, ExperienciaCardForm, BuscaGridEntity, RouterLink],
  templateUrl: './second-step-form-container.html',
  styleUrl: './second-step-form-container.scss',
})
export class SecondStepFormsContainer { 
  private store = inject(Store);

  arrConocimientos: Signal<ConocimientoDto[]> = toSignal(
    this.store.select(selectUserConocimientos),
    { initialValue: [] }
  );

  arrExperiencias: Signal<ExperienciaDto[]> = toSignal(
    this.store.select(selectUserExperiencias),
    { initialValue: [] }
  )

}
