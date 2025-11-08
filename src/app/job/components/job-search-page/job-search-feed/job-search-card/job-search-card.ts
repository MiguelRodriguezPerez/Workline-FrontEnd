import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Oferta } from '../../../../objects/interfaces/Oferta';
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
