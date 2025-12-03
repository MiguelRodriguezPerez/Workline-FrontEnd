import { Component } from '@angular/core';
import { FirstStepTitles } from "../first-step-titles/first-step-titles";
import { FirstStepForm } from "../first-step-form/first-step-form";

@Component({
  selector: 'first-form-root-container',
  imports: [FirstStepTitles, FirstStepForm],
  templateUrl: './first-form-root-container.html',
  styleUrl: './first-form-root-container.scss',
})
export class FormRootContainer { }
