import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LoginForm } from "../../components/login-form/login-form";
import { LoginLogo } from "../../components/login-logo/login-logo";

@Component({
  selector: 'login-page',
  imports: [LoginForm, RouterLink, LoginLogo],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage { }
