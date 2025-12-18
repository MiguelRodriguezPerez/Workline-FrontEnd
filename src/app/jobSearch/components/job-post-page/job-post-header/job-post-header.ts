import { Component, input } from '@angular/core';
import { OfertaDtoJobSearch } from '../../../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
import { JobInscribeButton } from "../job-inscribe-button/job-inscribe-button";

@Component({
  selector: 'job-post-header',
  imports: [JobInscribeButton],
  templateUrl: './job-post-header.html',
  styleUrl: './job-post-header.scss',
})
export class JobPostHeader {

  jobPost = input.required<OfertaDtoJobSearch>();

}
