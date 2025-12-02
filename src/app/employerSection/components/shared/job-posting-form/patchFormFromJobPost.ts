import { FormGroup } from "@angular/forms";
import { OfertaDtoEmployer } from "../../../../shared/objects/interfaces/oferta/OfertaDtoEmployer";
import { JobPostBody } from "../../../../jobSearch/components/job-post-page/job-post-body/body/job-post-body";
import { OfertaFormGroup } from "../../../../shared/objects/interfaces/oferta/OfertaFormGroup";

export function patchFormFromJobPost(jobPost: OfertaDtoEmployer, form: FormGroup<OfertaFormGroup>) {
  form.patchValue({
    puesto: jobPost.puesto,
    sector: jobPost.sector,
    descripcion: jobPost.descripcion ?? '',
    ciudad: jobPost.ciudad,
    horas: jobPost.horas,
    salarioAnual: jobPost.salarioAnual,
    modalidadTrabajo: jobPost.modalidadTrabajo,
    tipoContrato: jobPost.tipoContrato,
  });
}
