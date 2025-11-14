import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Button } from "primeng/button";
import { LoginForm } from "../../components/login-form/login-form";

@Component({
  selector: 'login-page',
  imports: [LoginForm, Button, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage { }
