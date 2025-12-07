import { Component } from '@angular/core';
import { SecondStepTitles } from "../second-step-titles/second-step-titles";
import { SecondStepFormsContainer } from "../second-step-form-container/second-step-form-container";


@Component({
  selector: 'second-step-root-container',
  imports: [SecondStepTitles, SecondStepFormsContainer],
  templateUrl: './second-step-root-container.html',
  styleUrl: './second-step-root-container.scss',
})
export class SecondFormRootContainer { }
