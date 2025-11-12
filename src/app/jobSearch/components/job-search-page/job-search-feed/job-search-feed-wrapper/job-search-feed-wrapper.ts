import { Component, input } from '@angular/core';
import { Oferta } from '../../../../objects/interfaces/Oferta';
import { JobSearchFeed } from '../feed/job-search-feed';
import { JobSearchFeedLoading } from "../job-search-feed-loading/job-search-feed-loading";
import { JobSearchNoResults } from "../../job-search-no-results/job-search-no-results";

@Component({
  selector: 'job-search-feed-wrapper',
  imports: [JobSearchFeed, JobSearchFeedLoading, JobSearchNoResults],
  templateUrl: './job-search-feed-wrapper.html',
  styleUrl: './job-search-feed-wrapper.scss',
})
export class JobSearchFeedWrapper { 

  listaOfertas = input.required<Oferta[]>();
  isLoading = input.required<boolean>();

}
