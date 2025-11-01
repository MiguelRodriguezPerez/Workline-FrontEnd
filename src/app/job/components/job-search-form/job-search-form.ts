import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { TipoContrato } from '../../objects/enums/TipoContrato';
import { ModalidadTrabajo } from '../../objects/enums/ModalidadTrabajo';
import { TitleCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BusquedaOfertaMapper } from '../../objects/mappers/BusquedaOfertaMapper';

@Component({
  selector: 'job-search-form',
  standalone: true, // asegúrate de tener esto
  imports: [
    MatSelectModule,
    TitleCasePipe,
    ReactiveFormsModule
  ],
  templateUrl: './job-search-form.html',
  styleUrl: './job-search-form.scss',
})
export class JobSearchForm { 
  tiposContratoValues = Object.values(TipoContrato);
  tiposModalidadesValues = Object.values(ModalidadTrabajo);
  busquedaOfertaMapper = BusquedaOfertaMapper;

  private fb = inject(FormBuilder);

  searchForm = this.fb.group({
      puesto: [''],
      tipoContrato:[ this.tiposContratoValues[0] ],
      ciudad: [''],
      salarioAnualMinimo: [null],
      modalidad: [ this.tiposModalidadesValues[0] ],
  });

  submitEvent() {
    console.log(this.busquedaOfertaMapper.mapBusquedaOferta(this.searchForm));
  }
}
