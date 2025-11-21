import { Component, input } from '@angular/core';
import { Oferta } from '../../../../../shared/objects/interfaces/oferta/Oferta';
import { UserJobPostingCard } from "../user-job-posting-card/user-job-posting-card";

@Component({
  selector: 'user-job-postings-feed',
  imports: [UserJobPostingCard],
  templateUrl: './user-job-postings-feed.html',
  styleUrl: './user-job-postings-feed.scss',
})
export class UserJobPostingsFeed {
  jobPostingsList = input.required<Oferta[]>();
}
