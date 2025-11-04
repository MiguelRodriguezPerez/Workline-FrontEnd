import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { Oferta } from '../../../objects/interfaces/Oferta';
import { JobSearchFeed } from "../job-search-feed";
import { JobSearchFeedLoading } from "../job-search-feed-loading/job-search-feed-loading";

@Component({
  selector: 'job-search-feed-wrapper',
  imports: [JobSearchFeed, JobSearchFeedLoading],
  templateUrl: './job-search-feed-wrapper.html',
  styleUrl: './job-search-feed-wrapper.scss',
})
export class JobSearchFeedWrapper implements OnChanges{ 

  listaOfertas = input.required<Oferta[]>();
  isLoading = input.required<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      
  }

}
