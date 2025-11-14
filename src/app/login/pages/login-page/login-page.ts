import { Component } from '@angular/core';
import { LoginForm } from "../../components/login-form/login-form";
import { LoginLogo } from "../../components/login-logo/login-logo";
import { LoginButton } from "../../components/login-button/login-button";

@Component({
  selector: 'login-page',
  imports: [LoginForm, LoginLogo, LoginButton],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage { }
