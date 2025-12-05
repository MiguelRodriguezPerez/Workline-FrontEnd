import { Component } from '@angular/core';
import { ConocimientoCardForm } from "../../../../shared/components/card-entities/conocimiento-card-form/conocimiento-card-form";
import { ExperienciaCardForm } from "../../../../shared/components/card-entities/experiencia-card-form/experiencia-card-form";

@Component({
  selector: 'second-step-form-container',
  imports: [ConocimientoCardForm, ExperienciaCardForm],
  templateUrl: './second-step-form-container.html',
  styleUrl: './second-step-form-container.scss',
})
export class SecondStepFormsContainer { }
