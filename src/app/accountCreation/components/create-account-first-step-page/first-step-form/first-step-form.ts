import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Button } from "primeng/button";
import { InputText } from "primeng/inputtext";
import { Select } from "primeng/select";
import { GlobalFormUtils } from '../../../../shared/globalFormUtils';
import { Rol } from '../../../../shared/objects/enums/Rol';
import { NuevoUsuarioFormGroup } from '../../../interfaces/NuevoUsuarioFormGroup';
import { NuevoUsuarioMapper } from '../../../interfaces/NuevoUsuarioMapper';
import { RouterLink } from "@angular/router";
import { NewAccountService } from '../../../services/new-account.service';

@Component({
  selector: 'first-step-form',
  imports: [InputText, Select, Button, ReactiveFormsModule, RouterLink],
  templateUrl: './first-step-form.html',
  styleUrl: './first-step-form.scss',
})
export class FirstStepForm {

  private newAccountService = inject(NewAccountService);
  private fb = inject(NonNullableFormBuilder);
  globalFormUtils = GlobalFormUtils;
  nuevoUsuarioMapper = NuevoUsuarioMapper;

  userTypeOptions = [
    { label: 'Contratar personal', value: Rol.CONTRATA },
    { label: 'Buscar trabajo', value: Rol.BUSCA }
  ];

  // 1234kasdddddddjfA#

  newUserForm: FormGroup<NuevoUsuarioFormGroup> = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(35)], [this.newAccountService.isUsernameRepeated()]],
    telefono: ['', [Validators.required, Validators.pattern(this.globalFormUtils.phoneRegex), Validators.minLength(9), Validators.maxLength(9)]],
    ciudad: ['', [Validators.required, Validators.maxLength(25)]],
    password: ['', [Validators.required, Validators.pattern(this.globalFormUtils.passwordRegex)]],
    rol: [null as Rol | null, [Validators.required]]
  });

  submitEvent() {
    this.newUserForm.markAllAsTouched();
    if (this.newUserForm.valid) {
      console.log(
        this.nuevoUsuarioMapper.mapNuevoUsuarioFormGroupToDto(
          this.newUserForm
        )
      );

    }

  }
}
