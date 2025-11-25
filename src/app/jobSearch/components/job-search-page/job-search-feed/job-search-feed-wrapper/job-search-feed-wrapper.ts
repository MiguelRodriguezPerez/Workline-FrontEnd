import { Component, input } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { JobSearchFeed } from '../feed/job-search-feed';

import { JobSearchNoResults } from "../../job-search-no-results/job-search-no-results";
import { JobSearchFeedLoading } from "../../../../../shared/components/wk-loading/wk-loading";

@Component({
  selector: 'job-search-feed-wrapper',
  imports: [JobSearchFeed, JobSearchNoResults, JobSearchFeedLoading],
  templateUrl: './job-search-feed-wrapper.html',
  styleUrl: './job-search-feed-wrapper.scss',
})
export class JobSearchFeedWrapper {

  listaOfertas = input.required<Oferta[]>();
  isLoading = input.required<boolean>();

}
