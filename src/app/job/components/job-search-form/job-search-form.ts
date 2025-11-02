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

  // TODO: Encontrar solución más óptima con tipos para el FormGroup
  searchForm: FormGroup<BusquedaOfertaFormGroup> = this.fb.group({
    puesto: [''],
    tipoContrato: [null as TipoContrato | null],
    ciudad: [''],
    salarioAnualMinimo: [null as number | null],
    modalidadTrabajo: [null as ModalidadTrabajo | null],
  });

  selected: null | ModalidadTrabajo = null;

  submitEvent() {
    console.log(this.busquedaOfertaMapper.mapBusquedaOferta(this.searchForm));
  }
  
}
