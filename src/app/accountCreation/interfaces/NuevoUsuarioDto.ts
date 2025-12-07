import { Rol } from "../../shared/objects/enums/Rol";

export interface NuevoUsuarioDto {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  password: string;
  rol: Rol;
}
