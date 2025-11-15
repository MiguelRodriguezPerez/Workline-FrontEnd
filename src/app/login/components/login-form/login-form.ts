import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import { Button } from "primeng/button";
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LoginRequestFormGroup } from '../../interfaces/LoginRequestFormGroup';
import { LoginButton } from "../login-button/login-button";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login-form',
  imports: [
    ReactiveFormsModule, InputTextModule,
    MatIcon,
    Button
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {

  private fb = inject(NonNullableFormBuilder);
  private loginService = inject(LoginService);

  loginForm: FormGroup<LoginRequestFormGroup> = this.fb.group({
    username: [''],
    password: ['']
  },
    {
      asyncValidators: null
    });

  submitLoginForm() {
    this.loginService.uploadLogin(this.loginForm).subscribe({
      next: value => console.log('Implementar ngrx'),
      error: err => {
        console.log('El error existe');
        this.loginForm.setErrors({ loginFailed: 'Usuario y/o contraseña incorrectos'})
      }
    })
  }
}
