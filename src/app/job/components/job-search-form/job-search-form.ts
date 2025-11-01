import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FalsyValuePipe } from '../../../shared/pipes/falsy-value.pipe';
import { ModalidadTrabajo } from '../../objects/enums/ModalidadTrabajo';
import { TipoContrato } from '../../objects/enums/TipoContrato';
import { BusquedaOfertaFormGroup } from '../../objects/interfaces/BusquedaOferta';
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

  private fb = inject(NonNullableFormBuilder);

  searchForm: FormGroup<BusquedaOfertaFormGroup> = this.fb.group({
    puesto: [''],
    tipoContrato: [this.tiposContratoValues[0]],
    ciudad: [''],
    salarioAnualMinimo: [0],
    modalidad: [this.tiposModalidadesValues[0]],
  });

  submitEvent() {
    console.log(this.busquedaOfertaMapper.mapBusquedaOferta(this.searchForm));
  }
  
}
