import { Rol } from "../enums/Rol";

export interface UsuarioDto {
    nombre: string,
    email: string,
    ciudad: string,
    rol: Rol
}