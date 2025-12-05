import { FormGroup } from '@angular/forms';
import { ExperienciaDto, ExperienciaForm } from './ExperienciaDto';

export class ExperienciaMapper {

  static mapNewExperienciaFormToDto(form: FormGroup<ExperienciaForm>): ExperienciaDto {
    return {
      id: null, // siempre enviamos null para nuevas experiencias
      puesto: form.get('puesto')!.value,
      empresa: form.get('empresa')!.value,
      inicioExperiencia: form.get('inicioExperiencia')!.value,
      finExperiencia: form.get('finExperiencia')!.value
    };
  }

}
