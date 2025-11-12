import { Component, input, OnInit } from '@angular/core';

import { JobSearchCard } from '../job-search-card/job-search-card';
import { Oferta } from '../../../../objects/interfaces/Oferta';

@Component({
  selector: 'job-search-feed',
  imports: [JobSearchCard],
  templateUrl: './job-search-feed.html',
  styleUrl: './job-search-feed.scss',
})
export class JobSearchFeed { 

  listaOfertas = input.required<Oferta[]>();
  
}
