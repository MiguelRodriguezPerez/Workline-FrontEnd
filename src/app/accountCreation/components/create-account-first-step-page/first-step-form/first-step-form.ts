
import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Button } from "primeng/button";
import { InputText } from "primeng/inputtext";
import { Select } from "primeng/select";
import { GlobalFormUtils } from '../../../../shared/globalFormUtils';
import { Rol } from '../../../../shared/objects/enums/Rol';
import { NuevoUsuarioFormGroup } from '../../../interfaces/NuevoUsuarioFormGroup';
import { NuevoUsuarioMapper } from '../../../interfaces/NuevoUsuarioMapper';
import { Router, RouterLink } from "@angular/router";
import { NewAccountService } from '../../../services/new-account.service';
import { Store } from '@ngrx/store';
import { newUserCreated } from '../../../../shared/globalState/login/login.action';

@Component({
  selector: 'first-step-form',
  imports: [InputText, Select, Button, ReactiveFormsModule, RouterLink],
  templateUrl: './first-step-form.html',
  styleUrl: './first-step-form.scss',
})
export class FirstStepForm {

  private fb = inject(NonNullableFormBuilder);
  private newAccountService = inject(NewAccountService);
  private nuevoUsuarioMapper = NuevoUsuarioMapper;
  private store = inject(Store);
  private router = inject(Router);

  globalFormUtils = GlobalFormUtils;

  userTypeOptions = [
    { label: 'Contratar personal', value: Rol.CONTRATA },
    { label: 'Buscar trabajo', value: Rol.BUSCA }
  ];

  // 1234kasdddddddjfA#

  newUserForm: FormGroup<NuevoUsuarioFormGroup> = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(25)], [this.newAccountService.isUsernameRepeated()]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
    telefono: ['', [Validators.required, Validators.pattern(this.globalFormUtils.phoneRegex), Validators.minLength(9), Validators.maxLength(9)]],
    ciudad: ['', [Validators.required, Validators.maxLength(25)]],
    password: ['', [Validators.required, Validators.pattern(this.globalFormUtils.passwordRegex)]],
    rol: [null as Rol | null, [Validators.required]]
  });

  submitEvent() {
    this.newUserForm.markAllAsTouched();

    if (!this.newUserForm.valid) return;

    this.newAccountService.createUserRequest(
      this.nuevoUsuarioMapper.mapNuevoUsuarioFormGroupToDto(this.newUserForm)
    ).subscribe({
      next: (response) => {
        this.store.dispatch(
          newUserCreated({ content: response })
        );

        if (response.rol === Rol.BUSCA) this.router.navigate(['/accountCreation/secondStep']);
        else this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error en la creación del usuario:', err);
      }
    });
  }

  resetEvent () {
    this.newUserForm.reset();
  }
}
