import { Rol } from "../enums/Rol";
import { ConocimientoDto } from "./busca/ConocimientoDto";
import { ExperienciaDto } from "./busca/ExperienciaDto";

export interface LoggedUserContext {
    username: string,
    email: string,
    conocimientos? : ConocimientoDto[],
    experiencias?: ExperienciaDto[],
    rol: Rol 
}