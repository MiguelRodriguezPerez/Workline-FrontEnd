import { Component } from '@angular/core';
import { UserTitle } from "../../../shared/components/user-title/user-title";

@Component({
  selector: 'my-data-container',
  imports: [UserTitle],
  templateUrl: './my-data-container.html',
  styleUrl: './my-data-container.scss',
})
export class MyDataContainer { }
