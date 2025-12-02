import { ModalidadTrabajo } from "../../../../jobSearch/objects/enums/ModalidadTrabajo";
import { TipoContrato } from "../../../../jobSearch/objects/enums/TipoContrato";
import { BuscaDto } from "../busca/BuscaDto";

export interface OfertaDtoEmployer {
  id: number | null;
  puesto: string;
  sector: string;
  descripcion?: string | null;
  ciudad: string;
  salarioAnual?: number | null;
  tipoContrato: TipoContrato;
  horas: number;                // Byte en Java → number en TS
  modalidadTrabajo: ModalidadTrabajo;
  fechaPublicacion: Date | null;

  listaCandidatos: BuscaDto[]; // al venir de @JsonIgnore normalmente no aparece
}
