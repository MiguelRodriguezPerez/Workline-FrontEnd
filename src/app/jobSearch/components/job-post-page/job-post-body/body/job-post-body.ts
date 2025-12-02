import { Component, input } from '@angular/core';
import { OfertaDtoJobSearch } from '../../../../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
import { JobPostInfo } from "../job-post-info/job-post-info";
import { JobPostDescription } from "../job-post-description/job-post-description";

@Component({
  selector: 'job-post-body',
  imports: [JobPostInfo, JobPostDescription],
  templateUrl: './job-post-body.html',
  styleUrl: './job-post-body.scss',
})
export class JobPostBody {

  jobPost = input.required<OfertaDtoJobSearch>();

}
