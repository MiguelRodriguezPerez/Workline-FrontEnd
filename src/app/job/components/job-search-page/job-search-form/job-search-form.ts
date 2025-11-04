import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ModalidadTrabajo } from '../../../objects/enums/ModalidadTrabajo';
import { TipoContrato } from '../../../objects/enums/TipoContrato';
import { BusquedaOfertaFormGroup } from '../../../objects/interfaces/BusquedaOferta';
import { BusquedaOfertaMapper } from '../../../objects/mappers/BusquedaOfertaMapper';
import { OfertaService } from '../../../services/oferta.service';


@Component({
  selector: 'job-search-form',
  standalone: true, // asegúrate de tener esto
  imports: [
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './job-search-form.html',
  styleUrl: './job-search-form.scss',
})
export class JobSearchForm {
  tiposContratoKeys = Object.keys(TipoContrato);
  tiposModalidadesKeys = Object.keys(ModalidadTrabajo);
  busquedaOfertaMapper = BusquedaOfertaMapper;
  ofertaService = inject(OfertaService);

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
    this.ofertaService.browseFormQueryParams(
      this.busquedaOfertaMapper.mapBusquedaOfertaFromForm(this.searchForm)
    )
  }

  resetForm() {
    this.searchForm.reset();
    this.ofertaService.browseEmptyQueryParams();
  }

}
