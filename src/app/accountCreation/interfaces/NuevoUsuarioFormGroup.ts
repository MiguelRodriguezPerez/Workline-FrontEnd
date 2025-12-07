import { FormControl } from "@angular/forms";
import { Rol } from "../../shared/objects/enums/Rol";


export interface NuevoUsuarioFormGroup {
  nombre: FormControl<string>;
  email: FormControl<string>;
  telefono: FormControl<string>;
  ciudad: FormControl<string>;
  password: FormControl<string>;
  rol: FormControl<Rol | null>;
}
