import { Component, inject, input } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Button } from "primeng/button";
import { InputText } from "primeng/inputtext";
import { SelectModule } from 'primeng/select';
import { ModalidadTrabajo } from '../../../../objects/enums/ModalidadTrabajo';
import { TipoContrato } from '../../../../objects/enums/TipoContrato';
import { BusquedaOfertaFormGroup } from '../../../../objects/interfaces/BusquedaOferta';
import { BusquedaOfertaMapper } from '../../../../objects/mappers/BusquedaOfertaMapper';
import { BusquedaOfertaService } from '../../../../services/busquedaOferta.service';
import { tiposContratoTitleCase, tiposModalidadesTitleCase } from '../../../../../shared/objects/enums/JobPostEnumsTitleCase';



@Component({
  selector: 'job-search-form',
  imports: [
    ReactiveFormsModule,
    SelectModule,
    InputText,
    Button
  ],
  templateUrl: './job-search-form.html',
  styleUrl: './job-search-form.scss',
})
export class JobSearchForm {

  /* Si este callback existe, significa que este componente tiene como padre job-search-form-tablet  */
  closeMenu = input<() => void>();

  tiposContrato = tiposContratoTitleCase;
  tiposModalidad = tiposModalidadesTitleCase;
  busquedaOfertaMapper = BusquedaOfertaMapper;
  ofertaService = inject(BusquedaOfertaService);

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

  submitForm() {
    this.closeMenu()?.();

    this.ofertaService.browseFormQueryParams(
      this.busquedaOfertaMapper.mapBusquedaOfertaFromForm(this.searchForm)
    )
  }

  resetForm() {
    this.closeMenu()?.();
    this.searchForm.reset();
    this.ofertaService.browseEmptyQueryParams();
  }

}
