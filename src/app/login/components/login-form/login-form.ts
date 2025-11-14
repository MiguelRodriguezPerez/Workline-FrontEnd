import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginFormGroup } from '../../interfaces/LoginRequest';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MatIcon } from "@angular/material/icon";
import { LoginButton } from "../login-button/login-button";
import { Button } from "primeng/button";

@Component({
  selector: 'login-form',
  imports: [
    ReactiveFormsModule, FloatLabel, InputTextModule,
    MatIcon,
    LoginButton,
    Button
],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm { 

  private fb = inject(NonNullableFormBuilder);

  loginForm: FormGroup<LoginFormGroup> = this.fb.group({
    username: [''],
    password: ['']
  },
  {
    asyncValidators: null
  });

  submitLoginForm () {

  }
}
