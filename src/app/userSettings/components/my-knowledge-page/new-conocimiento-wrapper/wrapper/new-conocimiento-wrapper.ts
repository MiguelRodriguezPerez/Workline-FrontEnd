import { Component, signal } from '@angular/core';
import { Button } from "primeng/button";
import { ConocimientoCardForm } from "../../../../../shared/components/card-entities/conocimiento-card-form/conocimiento-card-form";

@Component({
  selector: 'new-conocimiento-wrapper',
  imports: [Button, ConocimientoCardForm],
  templateUrl: './new-conocimiento-wrapper.html',
  styleUrl: './new-conocimiento-wrapper.scss',
})
export class NewConocimientoWrapper { 
  isEntityCardOpen = signal<boolean>(false);

  changeEntityCardSignalEvent () {
    this.isEntityCardOpen.update(prev => !prev);
  }
}
