import { FormGroup } from '@angular/forms';
import { NuevoUsuarioFormGroup } from './NuevoUsuarioFormGroup';
import { NuevoUsuarioDto } from './NuevoUsuarioDto';
import { Rol } from '../../shared/objects/enums/Rol';

export class NuevoUsuarioMapper {

  static mapNuevoUsuarioFormGroupToDto(form: FormGroup<NuevoUsuarioFormGroup>): NuevoUsuarioDto {
    return {
      nombre: form.get('nombre')!.value,
      email: form.get('email')!.value,
      telefono: form.get('telefono')!.value,
      ciudad: form.get('ciudad')!.value,
      password: form.get('password')!.value,
      rol: form.get('rol')!.value as Rol
    };
  }

}
