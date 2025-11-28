import { Component, input } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'job-post-info',
  imports: [TitleCasePipe],
  templateUrl: './job-post-info.html',
  styleUrl: './job-post-info.scss',
})
export class JobPostInfo {

  jobPost = input.required<Oferta>();

}
