import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'login-button',
  imports: [ButtonModule],
  templateUrl: './login-button.html',
  styleUrl: './login-button.scss',
})
export class LoginButton { 
  label = input.required<string>();
}
