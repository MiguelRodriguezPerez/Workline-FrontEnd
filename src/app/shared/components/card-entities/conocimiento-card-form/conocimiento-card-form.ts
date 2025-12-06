import { Component, inject, input, signal, effect } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalFormUtils } from '../../../globalFormUtils';
import { Button } from "primeng/button";
import { ConocimientoDto, ConocimientoForm } from '../../../objects/interfaces/busca/ConocimientoDto';
import { BuscaService } from '../../../services/busca.service';
import { ConocimientoMapper } from '../../../objects/interfaces/busca/ConocimientoMapper';
import { InputText } from 'primeng/inputtext';
import { Store } from '@ngrx/store';
import { deleteSelectedConocimiento, newConocimientoAdded, updatedConocimiento } from '../../../globalState/login/login.action';
import { NgClass } from '@angular/common';


@Component({
  selector: 'conocimiento-card-form',
  imports: [InputText, Button, ReactiveFormsModule, NgClass],
  templateUrl: './conocimiento-card-form.html',
  styleUrl: './conocimiento-card-form.scss',
})
export class ConocimientoCardForm { 

  conocimientoInput = input<ConocimientoDto>();
  private fb = inject(NonNullableFormBuilder);
  globalFormUtils = GlobalFormUtils;
  private conocimientoMapper = ConocimientoMapper;
  private buscaService = inject(BuscaService);
  store = inject(Store);

  // Si conocimientoInput existe, inicialmente readonly
  isReadOnly = signal<boolean>(false);

  conocimientoForm: FormGroup<ConocimientoForm> = this.fb.group({
    centroEducativo: ['', Validators.required],
    titulo: ['', Validators.required],
    inicioPeriodoConocimiento: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]],
    finPeriodoConocimiento: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]]
  });

  
  // efecto que escucha cambios en conocimientoInput
  private _changeEffect =  effect(() => {
    const conocimiento = this.conocimientoInput();
    if (conocimiento) {
      this.isReadOnly.set(true);
      this.conocimientoForm.patchValue({
        centroEducativo: conocimiento.centroEducativo,
        titulo: conocimiento.titulo,
        inicioPeriodoConocimiento: conocimiento.inicioPeriodoConocimiento,
        finPeriodoConocimiento: conocimiento.finPeriodoConocimiento
      });
    } 
    else {
      this.isReadOnly.set(false);
      this.conocimientoForm.reset();
    }
  });
  
  /* No tengo dudas de que existe una manera más limpia de lograr lo mismo */

  submitEvent() {
    if (this.conocimientoInput()) {
        this.buscaService.updateConocimiento(
          this.conocimientoMapper.mapConocimientoFormToDto(
            this.conocimientoForm,
            this.conocimientoInput()!
        )
      ).subscribe({
        next: (value) => {
          this.store.dispatch(updatedConocimiento({ updatedConocimiento: value }));
        },
        error: (error) => { console.error('Error: ' + error) }
      });
    }

    else {
      this.buscaService.uploadNewConocimiento(
        this.conocimientoMapper.mapNewConocimientoFormToDto(
          this.conocimientoForm
      )
    ).subscribe({
      next: (value) => {
        this.store.dispatch(newConocimientoAdded({ newConocimiento: value }));
        this.isReadOnly.set(true);
        this.conocimientoForm.reset();
      },
      error: (error) => { console.error('Error: ' + error) }
    });
    }
  }

  readOnlyEvent () {
    this.isReadOnly.update((prev) => !prev);
  }

  deleteEvent () {
    if (!this.conocimientoInput()) throw new Error("What happened?");
    this.buscaService.deleteConocimiento(this.conocimientoInput()!.id!)
      .subscribe({
        next: () => this.store.dispatch(deleteSelectedConocimiento({ conocimientoId: this.conocimientoInput()!.id!}))
      })
  }
}
