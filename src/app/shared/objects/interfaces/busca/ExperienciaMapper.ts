import { FormGroup } from '@angular/forms';
import { ExperienciaDto, ExperienciaForm } from './ExperienciaDto';

export class ExperienciaMapper {

  static mapExperienciaFormToDto(form: FormGroup<ExperienciaForm>, originalExperiencia?: ExperienciaDto): ExperienciaDto {
    return {
      id: originalExperiencia ? originalExperiencia.id : null,
      puesto: form.get('puesto')!.value,
      empresa: form.get('empresa')!.value,
      inicioExperiencia: form.get('inicioExperiencia')!.value,
      finExperiencia: form.get('finExperiencia')!.value
    };
  }


}
