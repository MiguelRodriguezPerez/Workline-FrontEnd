import { Oferta } from "./Oferta";
import { OfertaFormGroup } from "./OfertaFormGroup";
import { FormGroup } from '@angular/forms';

export class OfertaMapper {
    
    static mapNewOfertaFormGroupToOferta(ofertaForm: FormGroup<OfertaFormGroup>): Oferta {
        const formValues = ofertaForm.value;

        const resultado: Oferta = {
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
            // UsuarioDto lo asignará el servidor
            contrata: {} as any,
            numeroCandidatos: 0
        };

        return resultado;
    }

}