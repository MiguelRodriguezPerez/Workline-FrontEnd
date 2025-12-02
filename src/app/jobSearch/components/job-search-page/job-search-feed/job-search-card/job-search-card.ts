import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { OfertaDtoJobSearch } from '../../../../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';

@Component({
  selector: 'job-search-card',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './job-search-card.html',
  styleUrl: './job-search-card.scss',
})
export class JobSearchCard {

  oferta = input.required<OfertaDtoJobSearch>();

}
