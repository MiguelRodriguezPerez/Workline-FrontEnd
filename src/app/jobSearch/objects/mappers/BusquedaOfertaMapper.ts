import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BusquedaOferta, BusquedaOfertaFormGroup } from '../interfaces/BusquedaOferta';
import { ModalidadTrabajo } from '../enums/ModalidadTrabajo';
import { PaginaJobResponse } from '../interfaces/PaginaJobResponse';
import { Oferta } from '../../../shared/objects/interfaces/oferta/Oferta';
import { Params } from '@angular/router';
import { TipoContrato } from '../enums/TipoContrato';
export class BusquedaOfertaMapper {

    /* Recibes un objeto con varios FormControl */
    static mapBusquedaOfertaFromForm(formGroup: FormGroup<BusquedaOfertaFormGroup>): BusquedaOferta {
        /* En el formulario de búsqueda no encontre la manera de hacer que el input de salarioMinimoAnual
        al tener por valor 0 se mostrara vacío (No se pueden aplicar pipes sobre el valor de un input reactivo)

        El apaño que se me ocurrió es permitir que el valor pueda ser null y en el mapper a la entidad
        BusquedaOferta asignarle 0 a salarioAnualMinimo */

        /* formGroup.getRawValue() devuelve los valores de sus formControl */
        const { puesto, ciudad, tipoContrato, modalidadTrabajo: modalidad, salarioAnualMinimo } = formGroup.getRawValue();
        const resultado: BusquedaOferta = {
            puesto,
            ciudad,
            tipoContrato,
            modalidadTrabajo: modalidad,
            salarioAnualMinimo: salarioAnualMinimo ?? 0,
        };
        return resultado;
    }

    static mapPaginaJobResponseToOfertaArr(response: PaginaJobResponse): Oferta[] {
        return response.content;
    }

    static mapQueryParamsToBusquedaOferta(queryParams: Params): BusquedaOferta {
        /* NOTA: Estas obteniendo los enums usando sus KEYS y no sus values */

        const resultado: BusquedaOferta = {
            puesto: queryParams['puesto'] ?? '',
            /* Si, este es todo el contorsionismo que hay que hacer para convertir un valor dinámico en enum */
            tipoContrato: TipoContrato[queryParams['tipoContrato'] as keyof typeof TipoContrato],
            ciudad: queryParams['ciudad'] ?? '',
            salarioAnualMinimo: queryParams['salarioAnualMinimo'] ?? 0,
            modalidadTrabajo: ModalidadTrabajo[queryParams['modalidadTrabajo'] as keyof typeof ModalidadTrabajo],
        }

        return resultado;
    }

}