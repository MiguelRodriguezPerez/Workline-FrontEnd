import { Component, inject, input } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalFormUtils } from '../../../globalFormUtils';
import { Button } from "primeng/button";
import { ConocimientoDto, ConocimientoForm } from '../../../objects/interfaces/busca/ConocimientoDto';
import { BuscaService } from '../../../services/busca.service';
import { ConocimientoMapper } from '../../../objects/interfaces/busca/ConocimientoMapper';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'conocimiento-card-form',
  imports: [InputText, Button, ReactiveFormsModule],
  templateUrl: './conocimiento-card-form.html',
  styleUrl: './conocimiento-card-form.scss',
})
export class ConocimientoCardForm { 

  conocimientoInput = input<ConocimientoDto>();
  private fb = inject(NonNullableFormBuilder);
  globalFormUtils = GlobalFormUtils;
  private conocimientoMapper = ConocimientoMapper;
  private buscaService = inject(BuscaService);

  conocimientoForm : FormGroup<ConocimientoForm> = this.fb.group({
    centroEducativo: ['', Validators.required],
    titulo: ['', Validators.required],
    inicioPeriodoConocimiento: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]],
    finPeriodoConocimiento: ['', [Validators.required, Validators.pattern(this.globalFormUtils.dateRegex)]]
  });
  
  submitEvent () {
    this.buscaService.uploadNewConocimiento(
      this.conocimientoMapper.mapNewConocimientoFormToDto(
        this.conocimientoForm
      )
    ).subscribe(
      error => console.error('Error: ' + error)
    );
  }
}
