import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalFormUtils } from '../../../globalFormUtils';
import { Button } from 'primeng/button';
import { ExperienciaForm } from '../../../objects/interfaces/busca/ExperienciaDto';
import { BuscaService } from '../../../services/busca.service';
import { ExperienciaMapper } from '../../../objects/interfaces/busca/ExperienciaMapper';
import { InputText } from 'primeng/inputtext';


@Component({
  selector: 'experiencia-card-form',
  imports: [InputText, Button, ReactiveFormsModule],
  templateUrl: './experiencia-card-form.html',
  styleUrl: './experiencia-card-form.scss',
})
export class ExperienciaCardForm { 

  private fb = inject(NonNullableFormBuilder);
  globalFormUtils = GlobalFormUtils;
  private experienciaMapper = ExperienciaMapper;
  private buscaService = inject(BuscaService);

  experienciaForm: FormGroup<ExperienciaForm> = this.fb.group({
    puesto: ['', Validators.required],
    empresa: ['', Validators.required],
    inicioExperiencia: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]],
    finExperiencia: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]]
  });
  
  submitEvent() {
    this.buscaService.uploadNewExperiencia(
      this.experienciaMapper.mapNewExperienciaFormToDto(this.experienciaForm)
    ).subscribe({
      error: err => console.error('Error: ' + err)
    });
  }
}
