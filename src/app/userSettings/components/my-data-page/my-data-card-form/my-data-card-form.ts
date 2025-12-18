import { NgClass } from '@angular/common';
import { Component, effect, inject, Input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { GlobalFormUtils } from '../../../../shared/globalFormUtils';
import { UsuarioSettingsForm } from '../../../interfaces/UsuarioSettingsDto';
import { UsuarioSettingsMapper } from '../../../interfaces/UsuarioSettingsMapper';
import { UserSettingsService } from '../../../services/user-settings.service';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'my-data-card-form',
  imports: [ReactiveFormsModule, NgClass, Button, InputText],
  templateUrl: './my-data-card-form.html',
  styleUrl: './my-data-card-form.scss',
})
export class MyDataCardForm {

  private fb = inject(NonNullableFormBuilder);
  globalFormUtils = GlobalFormUtils;
  private userSettingsService = inject(UserSettingsService);
  private loggedUser = toSignal(this.userSettingsService.getCurrentUser(), {
    initialValue: null
  });
  private usuarioSettingsMapper = UsuarioSettingsMapper;
  isReadOnly = signal<boolean>(true);

  userSettingsForm: FormGroup<UsuarioSettingsForm> = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
    telefono: ['', [Validators.required, Validators.pattern(this.globalFormUtils.phoneRegex)]],
    ciudad: ['', [Validators.required, Validators.maxLength(25)]],
  });

  private _formEffect = effect(() => {
    const user = this.loggedUser();

    if (!user) return;

    this.userSettingsForm.patchValue({
      nombre: user.nombre ?? '',
      email: user.email ?? '',
      telefono: user.telefono ?? '',
      ciudad: user.ciudad ?? '',
    });
  });

  submitEvent() {
    this.userSettingsService.updateUserData(
      this.usuarioSettingsMapper.mapFormToUsuarioSettingsDto(
        this.userSettingsForm, this.loggedUser()!
      )
    ).subscribe({
      next: () => this.isReadOnly.set(true)
    });
  }

  resetEvent() {
    this.userSettingsForm.reset();
  }

  editEvent() {
    this.isReadOnly.update(prev => !prev);
  }
}
