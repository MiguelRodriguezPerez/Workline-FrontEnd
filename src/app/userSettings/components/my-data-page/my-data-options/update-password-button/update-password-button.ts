import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'update-password-button',
  imports: [Button, RouterLink],
  templateUrl: './update-password-button.html',
  styleUrl: './update-password-button.scss',
})
export class UpdatePasswordButton { }
