import { ModalidadTrabajo } from "../../../../jobSearch/objects/enums/ModalidadTrabajo";
import { TipoContrato } from "../../../../jobSearch/objects/enums/TipoContrato";
import { ContrataDto } from "../ContrataDto";

export interface OfertaDtoJobSearch {
    id: number | null,
    puesto: string,
    sector: string,
    descripcion: string | null,
    ciudad: string,
    salarioAnual: number | null,
    horas: number | null,
    fechaPublicacion: Date | null,
    tipoContrato: TipoContrato,
    modalidadTrabajo: ModalidadTrabajo,
    contrata: ContrataDto,
    numeroCandidatos: number
}