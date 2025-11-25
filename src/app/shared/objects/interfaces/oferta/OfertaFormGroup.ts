import { FormControl } from "@angular/forms";
import { ModalidadTrabajo } from "../../../../jobSearch/objects/enums/ModalidadTrabajo";
import { TipoContrato } from "../../../../jobSearch/objects/enums/TipoContrato";

export interface OfertaFormGroup {
    puesto: FormControl<string>,
    sector: FormControl<string>,
    descripcion: FormControl<string>,
    ciudad: FormControl<string>,
    salarioAnual: FormControl<number | null>,
    horas: FormControl<number | null>,
    tipoContrato: FormControl<TipoContrato | null>,
    modalidadTrabajo: FormControl<ModalidadTrabajo | null>,
}