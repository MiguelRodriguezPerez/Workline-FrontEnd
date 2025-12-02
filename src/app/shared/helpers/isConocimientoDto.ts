import { ConocimientoDto } from "../objects/interfaces/busca/ConocimientoDto";

export function isConocimientoDto(obj: any): obj is ConocimientoDto {
  return (
    typeof obj === "object" &&
    obj !== null &&

    typeof obj.id === "number" &&
    typeof obj.centroEducativo === "string" &&
    typeof obj.titulo === "string" 
    /* Deshabilitaste la validación de las fechas porque es probable que no cuadren con Date */

    // Comprobar fechas: deben ser instancia de Date
    // obj.inicioPeriodoConocimiento instanceof Date &&
    // obj.finPeriodoConocimiento instanceof Date
  );
}