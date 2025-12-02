import { Rol } from "../../enums/Rol";
import { ConocimientoDto } from "./ConocimientoDto";
import { ExperienciaDto } from "./ExperienciaDto";


export interface BuscaDto {
  id: number;
  nombre: string;
  email: string;
  ciudad: string;
  telefono: string;
  rol: Rol;

  listaConocimientos: ConocimientoDto[];
  listaExperiencias: ExperienciaDto[];
}
