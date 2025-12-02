import { Rol } from "../enums/Rol";

export interface ContrataDto {
    id: number,
    nombre: string,
    email: string,
    ciudad: string,
    rol: Rol
}