import { TitleCasePipe } from '@angular/common';
<<<<<<< Updated upstream
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
=======
import { Component, input } from '@angular/core';
>>>>>>> Stashed changes
import { RouterLink } from "@angular/router";
import { Oferta } from '../../../../objects/interfaces/Oferta';

@Component({
  selector: 'job-search-card',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './job-search-card.html',
  styleUrl: './job-search-card.scss',
})
export class JobSearchCard {

  oferta = input.required<Oferta>();

}
