import { Component } from '@angular/core';
import { InputText } from "primeng/inputtext";
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { Select } from "primeng/select";
import { Rol } from '../../../../shared/objects/enums/Rol';
import { Button } from "primeng/button";

@Component({
  selector: 'first-step-form',
  imports: [InputText, ɵInternalFormsSharedModule, Select, Button],
  templateUrl: './first-step-form.html',
  styleUrl: './first-step-form.scss',
})
export class FirstStepForm { 
  userTypeOptions = [
    { label: 'Contratar personal' , value: Rol.CONTRATA },
    { label: 'Buscar trabajo', value: Rol.BUSCA}
  ];
}
