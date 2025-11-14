import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import { Button } from "primeng/button";
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LoginFormGroup } from '../../interfaces/LoginRequest';
import { LoginButton } from "../login-button/login-button";

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
