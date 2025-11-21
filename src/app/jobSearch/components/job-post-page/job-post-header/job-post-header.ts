import { Component, input } from '@angular/core';
import { Oferta } from '../../../../shared/objects/interfaces/oferta/Oferta';

@Component({
  selector: 'job-post-header',
  imports: [],
  templateUrl: './job-post-header.html',
  styleUrl: './job-post-header.scss',
})
export class JobPostHeader {

  jobPost = input.required<Oferta>();

}
