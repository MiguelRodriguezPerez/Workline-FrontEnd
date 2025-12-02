import { ExperienciaDto } from "../objects/interfaces/busca/ExperienciaDto";

export function isExperienciaDto(obj: any): obj is ExperienciaDto {
  return (
    typeof obj === "object" &&
    obj !== null &&

    typeof obj.id === "number" &&
    typeof obj.puesto === "string" &&
    typeof obj.empresa === "string" 

    // obj.inicioExperiencia instanceof Date &&
    // obj.finExperiencia instanceof Date
  );
}