import { FormControl } from "@angular/forms";
import { ModalidadTrabajo } from "../enums/ModalidadTrabajo";
import { TipoContrato } from "../enums/TipoContrato";

export interface BusquedaOferta {
    puesto: string,
    tipoContrato: TipoContrato,
    ciudad: string,
    salarioAnualMinimo: number,
    modalidad: ModalidadTrabajo
}

export interface BusquedaOfertaFormGroup {
    puesto: FormControl<string>,
    tipoContrato: FormControl<TipoContrato>,
    ciudad: FormControl<string>,
    salarioAnualMinimo: FormControl<number>,
    modalidad: FormControl<ModalidadTrabajo>
}