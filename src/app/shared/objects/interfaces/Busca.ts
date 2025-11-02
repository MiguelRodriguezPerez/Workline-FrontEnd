import { Rol } from "../enums/Rol";
import { Usuario } from "./Usuario";

export interface Busca extends Usuario {
    rol: Rol.BUSCA
}