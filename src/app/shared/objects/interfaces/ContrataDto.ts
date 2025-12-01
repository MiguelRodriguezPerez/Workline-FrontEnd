import { Rol } from "../enums/Rol";

export interface ContrataDto {
    nombre: string,
    email: string,
    ciudad: string,
    rol: Rol
}