import { FormControl } from '@angular/forms';

export interface UsuarioSettingsDto {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
}


export interface UsuarioSettingsForm {
  nombre: FormControl<string>;
  email: FormControl<string>;
  telefono: FormControl<string>;
  ciudad: FormControl<string>;
}

