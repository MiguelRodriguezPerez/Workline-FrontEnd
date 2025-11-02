import { FormControl } from "@angular/forms";
import { ModalidadTrabajo } from "../enums/ModalidadTrabajo";
import { TipoContrato } from "../enums/TipoContrato";

export interface BusquedaOferta {
    puesto: string,
    tipoContrato: TipoContrato | null,
    ciudad: string,
    salarioAnualMinimo: number,
    modalidadTrabajo: ModalidadTrabajo | null
}

/* En el formulario de búsqueda no encontre la manera de hacer que el input de salarioMinimoAnual
al tener por valor 0 se mostrara vacío (No se pueden aplicar pipes sobre el valor de un input reactivo)

El apaño que se me ocurrió es permitir que el valor pueda ser null y en el mapper a la entidad
BusquedaOferta asignarle 0 a salarioAnualMinimo */
export interface BusquedaOfertaFormGroup {
    puesto: FormControl<string>,
    tipoContrato: FormControl<TipoContrato | null>,
    ciudad: FormControl<string>,
    salarioAnualMinimo: FormControl<number | null>,
    modalidadTrabajo: FormControl<ModalidadTrabajo | null>
}