import { Component, effect, inject, input, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalFormUtils } from '../../../globalFormUtils';
import { Button } from 'primeng/button';
import { ExperienciaDto, ExperienciaForm } from '../../../objects/interfaces/busca/ExperienciaDto';
import { BuscaService } from '../../../services/busca.service';
import { ExperienciaMapper } from '../../../objects/interfaces/busca/ExperienciaMapper';
import { InputText } from 'primeng/inputtext';
import { Store } from '@ngrx/store';
import { NgClass } from '@angular/common';
import { deleteSelectedExperiencia, newExperienciaAdded, updatedExperiencia } from '../../../globalState/login/login.action';


@Component({
  selector: 'experiencia-card-form',
  imports: [InputText, Button, ReactiveFormsModule, NgClass],
  templateUrl: './experiencia-card-form.html',
  styleUrl: './experiencia-card-form.scss',
})
export class ExperienciaCardForm { 

  experienciaInput = input<ExperienciaDto>();
  private fb = inject(NonNullableFormBuilder);
  globalFormUtils = GlobalFormUtils;
  private experienciaMapper = ExperienciaMapper;
  private buscaService = inject(BuscaService);
  store = inject(Store);

  // Si conocimientoInput existe, inicialmente readonly
  isReadOnly = signal<boolean>(false);

  experienciaForm: FormGroup<ExperienciaForm> = this.fb.group({
    puesto: ['', Validators.required],
    empresa: ['', Validators.required],
    inicioExperiencia: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]],
    finExperiencia: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]]
  },
  {
    validators: this.globalFormUtils.compareDatesOrder
  }
  );

  private _changeEffect = effect(() => {
    const experiencia = this.experienciaInput();
    
    if (experiencia) {
      this.isReadOnly.set(true);
      this.experienciaForm.patchValue({
        puesto: experiencia.puesto,
        empresa: experiencia.empresa,
        inicioExperiencia: experiencia.inicioExperiencia,
        finExperiencia: experiencia.finExperiencia
      });
    } 
    else {
      this.isReadOnly.set(false);
      this.experienciaForm.reset();
    }
  });

  readOnlyEvent () {
    this.isReadOnly.update((prev) => !prev);
  }

  deleteEvent () {
    if (!this.experienciaInput()) throw new Error("What happened?");
    this.buscaService.deleteExperiencia(this.experienciaInput()!.id!)
      .subscribe({
        next: () => this.store.dispatch(deleteSelectedExperiencia({ experienciaId: this.experienciaInput()!.id!}))
      })
  }

  
  submitEvent() {
    if (!this.experienciaForm.valid) return;

    if (this.experienciaInput()) {
      this.buscaService.updateExperiencia(
        this.experienciaMapper.mapExperienciaFormToDto(
          this.experienciaForm, 
          this.experienciaInput()!
        )
      )
      .subscribe({
        next: (value) => {
          this.store.dispatch(updatedExperiencia({ updatedExperiencia: value }));
          this.isReadOnly.set(true);
        },
        error: (error) => {
          console.error('Error: ' + error);
        }
      });
    } 
    else {
      this.buscaService.uploadNewExperiencia(
        this.experienciaMapper.mapExperienciaFormToDto(this.experienciaForm)
      )
      .subscribe({
        next: (value) => {
          this.store.dispatch(newExperienciaAdded({ newExperiencia: value }));
          this.experienciaForm.reset();
        },
        error: (error) => {
          console.error('Error: ' + error);
        }
      });
    }
  }

}
