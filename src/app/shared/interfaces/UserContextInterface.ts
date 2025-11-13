import { Rol } from "../objects/enums/Rol";

export interface UserContextInterface {
    username: string,
    email: string,
    rol: Rol
}