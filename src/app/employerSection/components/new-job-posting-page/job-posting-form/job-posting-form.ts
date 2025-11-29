import { Location, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from "primeng/button";
import { InputText } from "primeng/inputtext";
import { Select } from "primeng/select";
import { ModalidadTrabajo } from '../../../../jobSearch/objects/enums/ModalidadTrabajo';
import { TipoContrato } from '../../../../jobSearch/objects/enums/TipoContrato';
import { OfertaFormGroup } from '../../../../shared/objects/interfaces/oferta/OfertaFormGroup';
import { FormUtilsJobPosting } from '../../../utils/formUtilsJobPost';
import { ContrataService } from '../../../service/contrata.service';
import { OfertaMapper } from '../../../../shared/objects/interfaces/oferta/OfertaMapper';
import { Router } from '@angular/router';


@Component({
  selector: 'job-posting-form',
  imports: [ReactiveFormsModule, InputText, Select, Button],
  templateUrl: './job-posting-form.html',
  styleUrl: './job-posting-form.scss',
})
export class JobPostingForm { 

  contrataService = inject(ContrataService);
  formUtils = FormUtilsJobPosting;
  private ofertaMapper = OfertaMapper;
  private fb = inject(NonNullableFormBuilder);

  router = inject(Router);
  private titleCasePipe = new TitleCasePipe();

  tiposContratoOptions = Object.values(TipoContrato).map(value => ({
    label: this.titleCasePipe.transform(value),
    value: value
  }));
  tiposModalidadesOptions = Object.values(ModalidadTrabajo).map(value => ({
    label: this.titleCasePipe.transform(value), 
    value: value                               
  }));
  

  jobPostingForm: FormGroup<OfertaFormGroup> = this.fb.group({
    puesto: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex), Validators.maxLength(23)]],
    sector: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex), Validators.maxLength(23)]],
    descripcion: ['', Validators.maxLength(23)],
    ciudad: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex), Validators.maxLength(23)]],
    horas: [null as number | null, [Validators.required, Validators.pattern(this.formUtils.onlyNumbersRegex)]],
    salarioAnual: [null as number | null, [Validators.required, Validators.pattern(this.formUtils.onlyNumbersRegex)]],
    modalidadTrabajo: [null as ModalidadTrabajo | null, Validators.required],
    tipoContrato: [null as TipoContrato | null, Validators.required],
  });

  submitForm () {
    this.jobPostingForm.markAllAsTouched();
    console.log(this.ofertaMapper.mapNewOfertaFormGroupToOferta(this.jobPostingForm));
    
    
    if (this.jobPostingForm.valid) {
      this.contrataService.uploadNewOferta(
        this.ofertaMapper.mapNewOfertaFormGroupToOferta(this.jobPostingForm)
      ).subscribe({
        next: () => this.router.navigate(['employerSection','myJobPostings'])
      })
    };
    
  }

  goBackEvent () {
    this.router.navigate(['employerSection','myJobPostings'])
  }

}
