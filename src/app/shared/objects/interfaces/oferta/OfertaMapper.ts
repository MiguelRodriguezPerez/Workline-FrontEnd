import { OfertaDtoEmployer } from "./OfertaDtoEmployer";
import { OfertaDtoJobSearch } from "./OfertaDtoJobSearch";
import { OfertaFormGroup } from "./OfertaFormGroup";
import { FormGroup } from '@angular/forms';

export class OfertaMapper {

    static mapNewOfertaFormGroupToOferta(ofertaForm: FormGroup<OfertaFormGroup>): OfertaDtoEmployer {
        const formValues = ofertaForm.value;

        const resultado: OfertaDtoEmployer = {
            id: null,
            puesto: formValues.puesto!,
            sector: formValues.sector!,
            descripcion: formValues.descripcion || null,
            ciudad: formValues.ciudad!,
            salarioAnual: formValues.salarioAnual!,
            horas: formValues.horas!,
            // fechaPublicacion lo asignará el servidor              
            fechaPublicacion: null,
            tipoContrato: formValues.tipoContrato!,
            modalidadTrabajo: formValues.modalidadTrabajo!,
            listaCandidatos: []
        };

        return resultado;
    }

    static mapOfertaFormGroupToOferta(ofertaForm: FormGroup<OfertaFormGroup>, originalOferta: OfertaDtoEmployer): OfertaDtoEmployer {
        const formValues = ofertaForm.value;

        const resultado: OfertaDtoEmployer = {
            id: originalOferta.id,
            puesto: formValues.puesto!,
            sector: formValues.sector!,
            descripcion: formValues.descripcion || null,
            ciudad: formValues.ciudad!,
            salarioAnual: formValues.salarioAnual!,
            horas: formValues.horas!,
            // fechaPublicacion lo asignará el servidor              
            fechaPublicacion: null,
            tipoContrato: formValues.tipoContrato!,
            modalidadTrabajo: formValues.modalidadTrabajo!,
            listaCandidatos: originalOferta.listaCandidatos
        };

        return resultado;
    }

}