import { Component, input } from '@angular/core';
import { Oferta } from '../../../objects/interfaces/Oferta';

@Component({
  selector: 'job-post-header',
  imports: [],
  templateUrl: './job-post-header.html',
  styleUrl: './job-post-header.scss',
})
export class JobPostHeader { 
  
  jobPost = input.required<Oferta>();
  
}
