import { NgClass } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from "primeng/button";
import { InputText } from "primeng/inputtext";
import { Select } from "primeng/select";
import { ModalidadTrabajo } from '../../../../jobSearch/objects/enums/ModalidadTrabajo';
import { TipoContrato } from '../../../../jobSearch/objects/enums/TipoContrato';
import { OfertaDtoEmployer } from '../../../../shared/objects/interfaces/oferta/OfertaDtoEmployer';
import { OfertaFormGroup as OfertaEmployerFormGroup } from '../../../../shared/objects/interfaces/oferta/OfertaFormGroup';
import { OfertaMapper } from '../../../../shared/objects/interfaces/oferta/OfertaMapper';
import { ContrataService } from '../../../service/contrata.service';
import { FormUtilsJobPosting } from '../../../utils/formUtilsJobPost';
import { tiposContratoOptions, tiposModalidadesOptions } from './form-enums';
import { patchFormFromJobPost } from './patchFormFromJobPost';


@Component({
  selector: 'job-posting-form',
  imports: [ReactiveFormsModule, InputText, Select, Button, NgClass],
  templateUrl: './job-posting-form.html',
  styleUrl: './job-posting-form.scss',
})
export class JobPostingForm {

  private ofertaMapper = OfertaMapper;
  private fb = inject(NonNullableFormBuilder);
  private contrataService = inject(ContrataService);

  formUtils = FormUtilsJobPosting;
  router = inject(Router);
  jobPostInput = input<OfertaDtoEmployer>();
  tiposModalidadesOptions = tiposModalidadesOptions;
  tiposContratoOptions = tiposContratoOptions;

  isReadOnly = signal<boolean>(false);

  jobPostingForm: FormGroup<OfertaEmployerFormGroup> = this.fb.group({
    puesto: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex), Validators.maxLength(23)]],
    sector: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex), Validators.maxLength(23)]],
    descripcion: ['', Validators.maxLength(500)],
    ciudad: ['', [Validators.required, Validators.pattern(this.formUtils.onlyCharactersRegex), Validators.maxLength(23)]],
    horas: [null as number | null, [Validators.required, Validators.pattern(this.formUtils.onlyNumbersRegex)]],
    salarioAnual: [null as number | null, [Validators.required, Validators.pattern(this.formUtils.onlyNumbersRegex)]],
    modalidadTrabajo: [null as ModalidadTrabajo | null, Validators.required],
    tipoContrato: [null as TipoContrato | null, Validators.required],
  });

  private _patchFormEffect = effect(() => {
    const jobPost = this.jobPostInput();
    if (jobPost) {
      this.isReadOnly.set(true);
      patchFormFromJobPost(jobPost,this.jobPostingForm);
    }
  });

  submitForm() {
    this.jobPostingForm.markAllAsTouched();

    if (!this.jobPostingForm.valid) return;

    if (this.jobPostInput()) {
        this.contrataService.updateOferta(
          this.ofertaMapper.mapOfertaFormGroupToOferta(this.jobPostingForm,this.jobPostInput()!)
        )
        .subscribe({
          next: () => this.router.navigate(['employerSection', 'myJobPostings'])
        })
    }
    else {
        this.contrataService.uploadNewOferta (
          this.ofertaMapper.mapNewOfertaFormGroupToOferta(this.jobPostingForm)
        )
        .subscribe({
          next: () => this.router.navigate(['employerSection', 'myJobPostings'])
        })
    }

  }

  goBackEvent() {
    this.router.navigate(['employerSection', 'myJobPostings'])
  }

  editFormEvent() {
    if (this.isReadOnly()) {
      patchFormFromJobPost(this.jobPostInput()!, this.jobPostingForm);
      this.isReadOnly.set(false);
    } 
    else 
      this.isReadOnly.set(true);
  }


}
