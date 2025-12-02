import { Component, input } from '@angular/core';
import { OfertaDtoJobSearch } from '../../../../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
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

  listaOfertas = input.required<OfertaDtoJobSearch[]>();
  isLoading = input.required<boolean>();

}
