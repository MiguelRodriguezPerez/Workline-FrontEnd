import { Component, effect, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { requestLogin } from '../../../shared/globalState/login/login.action';
import { selectLoginState } from '../../../shared/globalState/login/login.selector';
import { LoginRequest, LoginRequestFormGroup } from '../../interfaces/LoginRequestFormGroup';


@Component({
  selector: 'login-form',
  imports: [
    ReactiveFormsModule, InputTextModule,
    Button,
    RouterLink
],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {

  private router = inject(Router);
  private fb = inject(NonNullableFormBuilder);
  private store = inject(Store);
  private state = this.store.selectSignal(selectLoginState);

  loginForm: FormGroup<LoginRequestFormGroup> = this.fb.group({
    username: [''],
    password: ['']
  },
  {
    asyncValidators: null
  });

  submitLoginForm() {
    this.store.dispatch(
      requestLogin({
        loginRequest: this.loginForm.value as LoginRequest
      })
    );
  }

  /* No puedes evaluar cambios de valor en ngRx de manera síncrona (Al menos los derivados de efectos asíncronos)
  En su lugar declaras un efecto que controle el valor del status */
  loginEffect = effect(() => {
    /* Nota: Si a lo largo de la aplicacion el state tiene status === 'error' significa que el último login fallo */
    if (this.state().status === 'error') 
      this.loginForm.setErrors({ loginFailed: 'Usuario o contraseña incorrectos' });
  });

}
