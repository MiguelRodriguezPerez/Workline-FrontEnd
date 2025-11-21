import { Component, input } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'user-job-posting-card',
  imports: [JsonPipe],
  templateUrl: './user-job-posting-card.html',
  styleUrl: './user-job-posting-card.scss',
})
export class UserJobPostingCard { 
  jobPosting = input.required<Oferta>();
}
