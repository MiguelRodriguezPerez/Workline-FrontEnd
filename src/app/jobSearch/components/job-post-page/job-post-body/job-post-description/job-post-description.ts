import { Component, input } from '@angular/core';
import { OfertaDtoJobSearch } from '../../../../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';

@Component({
  selector: 'job-post-description',
  imports: [],
  templateUrl: './job-post-description.html',
  styleUrl: './job-post-description.scss',
})
export class JobPostDescription {

  jobPost = input.required<OfertaDtoJobSearch>();

}
