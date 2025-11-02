import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BusquedaOferta, BusquedaOfertaFormGroup } from '../interfaces/BusquedaOferta';
import { ModalidadTrabajo } from '../enums/ModalidadTrabajo';
export class BusquedaOfertaMapper {

    /* Recibes un objeto con varios FormControl */
    static mapBusquedaOferta(formGroup: FormGroup<BusquedaOfertaFormGroup>): BusquedaOferta {
        /* En el formulario de búsqueda no encontre la manera de hacer que el input de salarioMinimoAnual
        al tener por valor 0 se mostrara vacío (No se pueden aplicar pipes sobre el valor de un input reactivo)

        El apaño que se me ocurrió es permitir que el valor pueda ser null y en el mapper a la entidad
        BusquedaOferta asignarle 0 a salarioAnualMinimo */
        
        /* formGroup.getRawValue() devuelve los valores de sus formControl */
        const { puesto, ciudad, tipoContrato, modalidad, salarioAnualMinimo } = formGroup.getRawValue();
        const resultado: BusquedaOferta = {
            puesto,
            ciudad,
            tipoContrato,
            modalidad,
            salarioAnualMinimo: salarioAnualMinimo ?? 0,
        };

        return resultado;
    }
}