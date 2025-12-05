import { Component } from '@angular/core';
import { SecondFormRootContainer } from "../../components/create-account-second-step/second-step-root-container/second-step-root-container";

@Component({
  selector: 'create-account-second-step',
  imports: [SecondFormRootContainer],
  templateUrl: './create-account-second-step.html',
  styleUrl: './create-account-second-step.scss',
})
export class CreateAccountSecondStep { }
