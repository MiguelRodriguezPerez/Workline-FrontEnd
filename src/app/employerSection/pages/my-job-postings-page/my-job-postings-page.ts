import { Component, inject } from '@angular/core';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { JobSearchFeedLoading } from "../../../shared/components/wk-loading/wk-loading";
import { WkPaginator } from "../../../shared/components/wk-paginator/wk-paginator";
import { JobPostingsCounter } from "../../components/my-job-postings-page/job-postings-counter/job-postings-counter";
import { NewJobPostingButton } from "../../components/my-job-postings-page/new-job-posting-button/new-job-posting-button";
import { UserJobPostingsFeed } from "../../components/my-job-postings-page/user-job-postings-feed/feed/user-job-postings-feed";
import { NoJobPostings } from "../../components/my-job-postings-page/user-job-postings-feed/no-job-postings/no-job-postings";
import { JobPostingContextService } from '../../context/JobPostingContextService';


@Component({
  selector: 'my-job-postings-page',
  imports: [NavbarWrapper, Footer, JobPostingsCounter, NewJobPostingButton, UserJobPostingsFeed, WkPaginator, JobSearchFeedLoading, NoJobPostings],
  templateUrl: './my-job-postings-page.html',
  styleUrl: './my-job-postings-page.scss',
})
export class MyJobPostingsPage {

  context = inject(JobPostingContextService);

}
