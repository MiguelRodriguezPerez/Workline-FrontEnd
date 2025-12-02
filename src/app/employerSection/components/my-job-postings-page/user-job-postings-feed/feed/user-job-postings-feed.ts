import { Component, input, OnInit } from '@angular/core';
import { OfertaDtoJobSearch } from '../../../../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
import { UserJobPostingCard } from "../user-job-posting-card/user-job-posting-card";
import { OfertaDtoEmployer } from '../../../../../shared/objects/interfaces/oferta/OfertaDtoEmployer';

@Component({
  selector: 'user-job-postings-feed',
  imports: [UserJobPostingCard],
  templateUrl: './user-job-postings-feed.html',
  styleUrl: './user-job-postings-feed.scss',
})
export class UserJobPostingsFeed implements OnInit {

  jobPostingsList = input.required<OfertaDtoEmployer[]>();

  ngOnInit(): void {
    console.log(this.jobPostingsList());
  }
}
