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

// Define la interfaz de nuevo para referencia
export interface OfertaDtoJobSearch {
    id: number | null,
    puesto: string,
    sector: string,
    descripcion: string | null,
    ciudad: string,
    salarioAnual: number | null,
    horas: number | null,
    fechaPublicacion: Date | null,
    tipoContrato: TipoContrato, // Asumiendo que TipoContrato es un tipo/enum conocido
    modalidadTrabajo: ModalidadTrabajo, // Asumiendo que ModalidadTrabajo es un tipo/enum conocido
    contrata: ContrataDto, // Asumiendo que ContrataDto es un tipo conocido
    numeroCandidatos: number
}

/**
 * Type guard para verificar si un objeto es de tipo OfertaDtoJobSearch.
 * @param obj El objeto a evaluar.
 * @returns true si el objeto coincide con la interfaz, false en caso contrario.
 */
export function isOfertaDtoJobSearch(obj: any): obj is OfertaDtoJobSearch {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const hasRequiredProperties = (
        'puesto' in obj && typeof obj.puesto === 'string' &&
        'sector' in obj && typeof obj.sector === 'string' &&
        'ciudad' in obj && typeof obj.ciudad === 'string' &&
        'numeroCandidatos' in obj && typeof obj.numeroCandidatos === 'number' &&
        // Comprobaciones de propiedades que pueden ser nulas o complejas (solo verificamos que existan)
        'id' in obj &&
        'descripcion' in obj &&
        'salarioAnual' in obj &&
        'horas' in obj &&
        'fechaPublicacion' in obj &&
        'tipoContrato' in obj &&
        'modalidadTrabajo' in obj &&
        'contrata' in obj
    );

    return hasRequiredProperties;
}