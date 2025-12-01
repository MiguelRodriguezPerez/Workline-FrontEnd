import { TitleCasePipe } from "@angular/common";
import { TipoContrato } from "../../../../jobSearch/objects/enums/TipoContrato";
import { ModalidadTrabajo } from "../../../../jobSearch/objects/enums/ModalidadTrabajo";

const titleCasePipe = new TitleCasePipe();

export const tiposContratoOptions = Object.values(TipoContrato).map(value => ({
    label: titleCasePipe.transform(value),
    value: value
  }));

export const tiposModalidadesOptions = Object.values(ModalidadTrabajo).map(value => ({
    label: titleCasePipe.transform(value),
    value: value
  }));
