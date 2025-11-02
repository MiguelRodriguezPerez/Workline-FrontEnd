import { Contrata } from "../../../shared/objects/interfaces/Contrata";
import { ModalidadTrabajo } from "../enums/ModalidadTrabajo";
import { TipoContrato } from "../enums/TipoContrato";

export interface Oferta {
    id: number,
    puesto: string,
    sector: string,
    descripcion: string,
    ciudad: string,
    salarioAnual: number,
    fechaPublicacion: Date,
    tipoContrato: TipoContrato,
    modalidadTrabajo: ModalidadTrabajo,
    contrata: Contrata
}