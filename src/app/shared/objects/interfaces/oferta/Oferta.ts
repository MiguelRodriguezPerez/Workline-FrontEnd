import { Contrata } from "../Contrata";
import { ModalidadTrabajo } from "../../../../jobSearch/objects/enums/ModalidadTrabajo";
import { TipoContrato } from "../../../../jobSearch/objects/enums/TipoContrato";

export interface Oferta {
    id: number,
    puesto: string,
    sector: string,
    descripcion: string,
    ciudad: string,
    salarioAnual: number,
    horas: number,
    fechaPublicacion: Date,
    tipoContrato: TipoContrato,
    modalidadTrabajo: ModalidadTrabajo,
    contrata: Contrata,
    numCandidatos: number
}