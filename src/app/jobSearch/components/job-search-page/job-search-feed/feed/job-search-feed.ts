import { Component, input, OnInit } from '@angular/core';

import { JobSearchCard } from '../job-search-card/job-search-card';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';

@Component({
  selector: 'job-search-feed',
  imports: [JobSearchCard],
  templateUrl: './job-search-feed.html',
  styleUrl: './job-search-feed.scss',
})
export class JobSearchFeed  implements OnInit{

  listaOfertas = input.required<Oferta[]>();

  ngOnInit(): void {
      console.log(this.listaOfertas());
      
  }

}
