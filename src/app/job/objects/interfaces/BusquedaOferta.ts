import { ModalidadTrabajo } from "../enums/ModalidadTrabajo";
import { TipoContrato } from "../enums/TipoContrato";

export interface BusquedaOferta {
    puesto: string,
    tipoContrato: TipoContrato,
    ciudad: string,
    salarioAnualMinimo: number,
    modalidad: ModalidadTrabajo
}