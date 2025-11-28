import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';

@Component({
  selector: 'job-search-card',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './job-search-card.html',
  styleUrl: './job-search-card.scss',
})
export class JobSearchCard {

  oferta = input.required<Oferta>();

}
