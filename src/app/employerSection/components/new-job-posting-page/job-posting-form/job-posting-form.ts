import { Component, inject } from '@angular/core';
import { TipoContrato } from '../../../../jobSearch/objects/enums/TipoContrato';
import { ModalidadTrabajo } from '../../../../jobSearch/objects/enums/ModalidadTrabajo';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { OfertaFormGroup } from '../../../../shared/objects/interfaces/oferta/OfertaFormGroup';


@Component({
  selector: 'job-posting-form',
  imports: [],
  templateUrl: './job-posting-form.html',
  styleUrl: './job-posting-form.scss',
})
export class JobPostingForm { 
  tiposContratoKeys = Object.keys(TipoContrato);
  tiposModalidadesKeys = Object.keys(ModalidadTrabajo);
  private fb = inject(NonNullableFormBuilder);

  jobPostingForm: FormGroup<OfertaFormGroup> = this.fb.group({
    puesto: [''],
    sector: [''],
    descripcion: [''],
    ciudad: [''],
    horas: [null as number | null],
    salarioAnual: [null as number | null],
    modalidadTrabajo: [null as ModalidadTrabajo | null],
    tipoContrato: [null as TipoContrato | null],
  });

}
