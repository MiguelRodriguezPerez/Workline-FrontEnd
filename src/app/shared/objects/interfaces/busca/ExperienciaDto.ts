import { FormControl } from "@angular/forms";

export interface ExperienciaDto {
  id: number | null;
  puesto: string;
  empresa: string;
  inicioExperiencia: string;
  finExperiencia: string;    
}

export interface ExperienciaForm {
  puesto: FormControl<string>;
  empresa: FormControl<string>;
  inicioExperiencia: FormControl<string>;
  finExperiencia: FormControl<string>;
}