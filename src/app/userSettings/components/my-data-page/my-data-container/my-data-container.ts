import { Component } from '@angular/core';
import { UserTitle } from "../../../shared/components/user-title/user-title";
import { MyDataCardForm } from "../my-data-card-form/my-data-card-form";

@Component({
  selector: 'my-data-container',
  imports: [UserTitle, MyDataCardForm],
  templateUrl: './my-data-container.html',
  styleUrl: './my-data-container.scss',
})
export class MyDataContainer { }
