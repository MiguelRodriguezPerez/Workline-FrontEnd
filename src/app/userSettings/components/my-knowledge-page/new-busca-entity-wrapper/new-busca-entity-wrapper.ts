import { NgComponentOutlet } from '@angular/common';
import { Component, input, signal, Type } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'new-busca-entity-wrapper',
  imports: [Button, NgComponentOutlet],
  templateUrl: './new-busca-entity-wrapper.html',
  styleUrl: './new-busca-entity-wrapper.scss',
})
export class NewConocimientoWrapper { 

  formCardComponent = input.required<Type<unknown>>();
  isEntityCardOpen = signal<boolean>(false);

  changeEntityCardSignalEvent () {
    this.isEntityCardOpen.update(prev => !prev);
  }
}
