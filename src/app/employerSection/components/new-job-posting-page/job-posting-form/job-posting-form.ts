import { Component, inject } from '@angular/core';
import { TipoContrato } from '../../../../jobSearch/objects/enums/TipoContrato';
import { ModalidadTrabajo } from '../../../../jobSearch/objects/enums/ModalidadTrabajo';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { OfertaFormGroup } from '../../../../shared/objects/interfaces/oferta/OfertaFormGroup';
import { InputText } from "primeng/inputtext";
import { Select } from "primeng/select";
import { Button } from "primeng/button";
import { FormUtilsJobPosting } from '../../../utils/formUtilsJobPost';


@Component({
  selector: 'job-posting-form',
  imports: [ReactiveFormsModule, InputText, Select, Button],
  templateUrl: './job-posting-form.html',
  styleUrl: './job-posting-form.scss',
})
export class JobPostingForm { 

  tiposContratoKeys = Object.keys(TipoContrato);
  tiposModalidadesKeys = Object.keys(ModalidadTrabajo);
  formUtils = FormUtilsJobPosting;
  private fb = inject(NonNullableFormBuilder);

  jobPostingForm: FormGroup<OfertaFormGroup> = this.fb.group({
    puesto: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex)]],
    sector: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex)]],
    descripcion: [''],
    ciudad: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex)]],
    horas: [null as number | null, [Validators.required, Validators.pattern(this.formUtils.onlyNumbersRegex)]],
    salarioAnual: [null as number | null, [Validators.required, Validators.pattern(this.formUtils.onlyNumbersRegex)]],
    modalidadTrabajo: [null as ModalidadTrabajo | null, Validators.required],
    tipoContrato: [null as TipoContrato | null, Validators.required],
  });

  submitForm () {
    console.log(this.jobPostingForm);
    if (this.jobPostingForm.errors) console.log(this.jobPostingForm.errors);
    else console.log(true);
  
    this.jobPostingForm.markAllAsTouched();
    
  }

}
