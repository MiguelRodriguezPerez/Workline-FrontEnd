import { Component } from '@angular/core';
import { UpdatePasswordButton } from "../update-password-button/update-password-button";
import { DeleteAccountButton } from "../delete-account-button/delete-account-button";

@Component({
  selector: 'my-data-options',
  imports: [UpdatePasswordButton, DeleteAccountButton],
  templateUrl: './my-data-options.html',
  styleUrl: './my-data-options.scss',
})
export class MyDataOptions { }
