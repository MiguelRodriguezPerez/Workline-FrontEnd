import { TitleCasePipe } from '@angular/common';
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'job-search-card',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './job-search-card.html',
  styleUrl: './job-search-card.scss',
})
export class JobSearchCard {

  oferta = input.required<Oferta>();

}
