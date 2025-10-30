import { Component } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { JobResultCounter } from "../../components/job-search-page/job-result-counter/job-result-counter";
import { JobSearchForm } from "../../components/job-search-form/job-search-form";

@Component({
  selector: 'job-search-page',
  imports: [NavbarWrapper, Footer, JobResultCounter, JobSearchForm],
  templateUrl: './job-search-page.html',
  styleUrl: './job-search-page.scss',
})
export class JobSearchPage { }
