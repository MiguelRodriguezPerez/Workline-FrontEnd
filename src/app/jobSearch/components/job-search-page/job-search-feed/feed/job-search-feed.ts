import { Component, input } from '@angular/core';

import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { JobSearchCard } from '../job-search-card/job-search-card';

@Component({
  selector: 'job-search-feed',
  imports: [JobSearchCard],
  templateUrl: './job-search-feed.html',
  styleUrl: './job-search-feed.scss',
})
export class JobSearchFeed {

  listaOfertas = input.required<Oferta[]>();

}
