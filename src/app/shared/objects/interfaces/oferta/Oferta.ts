import { ModalidadTrabajo } from "../../../../jobSearch/objects/enums/ModalidadTrabajo";
import { TipoContrato } from "../../../../jobSearch/objects/enums/TipoContrato";
import { UsuarioDto } from "../UsuarioDto";

export interface Oferta {
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
    contrata: UsuarioDto,
    numeroCandidatos: number
}