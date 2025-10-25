import { Component, input } from '@angular/core';

@Component({
  selector: 'home-option',
  imports: [],
  templateUrl: './home-option.html',
  styleUrl: './home-option.scss',
})
export class HomeOption { 

  title = input.required<string>();
  text = input.required<string>();
  imageSrc = input.required<string>();
  
}
