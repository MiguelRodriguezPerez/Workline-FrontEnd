import { Rol } from "../enums/Rol";

export interface LoggedUserContext {
    username: string,
    email: string,
    rol: Rol 
}