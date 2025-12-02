import { Component } from '@angular/core';
import { NewJobPostingButton } from "../../new-job-posting-button/new-job-posting-button";

@Component({
  selector: 'no-job-postings',
  imports: [NewJobPostingButton],
  templateUrl: './no-job-postings.html',
  styleUrl: './no-job-postings.scss',
})
export class NoJobPostings { }
