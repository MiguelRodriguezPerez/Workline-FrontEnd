import { Component, input } from '@angular/core';
import { OfertaDtoJobSearch } from '../../../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
import { Button } from 'primeng/button';

@Component({
  selector: 'job-post-header',
  imports: [Button],
  templateUrl: './job-post-header.html',
  styleUrl: './job-post-header.scss',
})
export class JobPostHeader {

  jobPost = input.required<OfertaDtoJobSearch>();

}
