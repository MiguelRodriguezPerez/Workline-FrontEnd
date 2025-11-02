import { Rol } from '../enums/Rol';
import { Usuario } from "./Usuario";

export interface Contrata extends Usuario {
    rol: Rol.CONTRATA
}