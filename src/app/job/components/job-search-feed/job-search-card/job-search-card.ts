import { Component, input } from '@angular/core';
import { Oferta } from '../../../objects/interfaces/Oferta';
import { JsonPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'job-search-card',
  imports: [ TitleCasePipe ],
  templateUrl: './job-search-card.html',
  styleUrl: './job-search-card.scss',
})
export class JobSearchCard { 

  oferta = input.required<Oferta>();

}
