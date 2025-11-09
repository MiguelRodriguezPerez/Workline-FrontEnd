import { Component, input } from '@angular/core';
import { Oferta } from '../../../../objects/interfaces/Oferta';

@Component({
  selector: 'job-post-description',
  imports: [],
  templateUrl: './job-post-description.html',
  styleUrl: './job-post-description.scss',
})
export class JobPostDescription { 

  jobPost = input.required<Oferta>();

}
