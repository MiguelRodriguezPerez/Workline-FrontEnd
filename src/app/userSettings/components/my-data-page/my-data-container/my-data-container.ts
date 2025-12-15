import { Component } from '@angular/core';
import { UserTitle } from "../../../shared/components/user-title/user-title";
import { MyDataCardForm } from "../my-data-card-form/my-data-card-form";
import { MyDataOptions } from "../my-data-options/options/my-data-options";
import { DeleteAccountFreezeScreen } from "../my-data-options/delete-account-freeze-screen/delete-account-freeze-screen";

@Component({
  selector: 'my-data-container',
  imports: [UserTitle, MyDataCardForm, MyDataOptions, DeleteAccountFreezeScreen],
  templateUrl: './my-data-container.html',
  styleUrl: './my-data-container.scss',
})
export class MyDataContainer { }
