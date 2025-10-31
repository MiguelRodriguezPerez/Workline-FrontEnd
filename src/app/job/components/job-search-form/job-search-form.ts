import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { TipoContrato } from '../../enums/TipoContrato';
import { ModalidadTrabajo } from '../../enums/ModalidadTrabajo';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'job-search-form',
  standalone: true, // asegúrate de tener esto
  imports: [
    MatSelectModule,
    TitleCasePipe
  ],
  templateUrl: './job-search-form.html',
  styleUrl: './job-search-form.scss',
})
export class JobSearchForm { 
  tiposContratoValues = Object.values(TipoContrato);
  tiposModalidadesValues = Object.values(ModalidadTrabajo);

  
}
