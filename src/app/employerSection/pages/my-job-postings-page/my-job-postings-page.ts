import { Component } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { JobPostingsCounter } from "../../components/my-job-postings-page/job-postings-counter/job-postings-counter";
import { NewJobPostingButton } from "../../components/new-job-posting-button/new-job-posting-button";

@Component({
  selector: 'my-job-postings-page',
  imports: [NavbarWrapper, Footer, JobPostingsCounter, NewJobPostingButton],
  templateUrl: './my-job-postings-page.html',
  styleUrl: './my-job-postings-page.scss',
})
export class MyJobPostingsPage { }
