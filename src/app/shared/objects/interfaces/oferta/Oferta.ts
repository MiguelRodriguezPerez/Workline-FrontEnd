import { ModalidadTrabajo } from "../../../../jobSearch/objects/enums/ModalidadTrabajo";
import { TipoContrato } from "../../../../jobSearch/objects/enums/TipoContrato";
import { UsuarioDto } from "../UsuarioDto";

export interface Oferta {
    id: number,
    puesto: string,
    sector: string,
    descripcion: string,
    ciudad: string,
    salarioAnual: number,
    horas: number,
    fechaPublicacion: Date | null,
    tipoContrato: TipoContrato,
    modalidadTrabajo: ModalidadTrabajo,
    contrata: UsuarioDto,
    numeroCandidatos: number
}