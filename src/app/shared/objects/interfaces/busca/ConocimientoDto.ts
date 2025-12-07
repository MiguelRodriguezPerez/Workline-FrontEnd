import { FormControl } from '@angular/forms';
export interface ConocimientoDto {
  id: number | null;
  centroEducativo: string;
  titulo: string;
  inicioPeriodoConocimiento: string;
  finPeriodoConocimiento: string;    
}

export interface ConocimientoForm {
  centroEducativo: FormControl<string>;
  titulo: FormControl<string>;
  inicioPeriodoConocimiento: FormControl<string>;
  finPeriodoConocimiento: FormControl<string>;
}
