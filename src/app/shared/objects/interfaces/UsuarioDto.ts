import { Rol } from "../enums/Rol";

export interface UsuarioDto {
    nombre: string,
    ciudad: string,
    email: string,
    rol: Rol
}