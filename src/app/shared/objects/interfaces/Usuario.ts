import { Rol } from "../enums/Rol";

export interface Usuario {
    id: number,
    nombre: string,
    email: string,
    ciudad: string,
    telefono: string,
    rol: Rol
}