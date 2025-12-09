import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../shared/globalState/login/login.selector';
import { UsuarioSettingsForm } from '../../interfaces/UsuarioSettingsDto';
import { GlobalFormUtils } from '../../../shared/globalFormUtils';

@Component({
  selector: 'my-data-card-form',
  imports: [ReactiveFormsModule],
  templateUrl: './my-data-card-form.html',
  styleUrl: './my-data-card-form.scss',
})
export class MyDataCardForm { 

  private fb = inject(NonNullableFormBuilder);
  private store = inject(Store);
  loggedUser = this.store.selectSignal(selectLoggedUser);
  globalFormUtils = GlobalFormUtils;

  userSettingsForm: FormGroup<UsuarioSettingsForm> = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
    telefono: ['', [Validators.required, Validators.pattern(this.globalFormUtils.phoneRegex)]],
    ciudad: ['', [Validators.required, Validators.maxLength(25)]],
  })

}
