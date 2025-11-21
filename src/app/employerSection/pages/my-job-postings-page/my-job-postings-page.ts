import { Component, inject, signal } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { JobPostingsCounter } from "../../components/my-job-postings-page/job-postings-counter/job-postings-counter";
import { NewJobPostingButton } from "../../components/my-job-postings-page/new-job-posting-button/new-job-posting-button";
import { rxResource } from '@angular/core/rxjs-interop';
import { PaginaJobResponse } from '../../../jobSearch/objects/interfaces/PaginaJobResponse';
import { ContrataService } from '../../service/contrata.service';
import { UserJobPostingsFeed } from "../../components/my-job-postings-page/user-job-postings-feed/feed/user-job-postings-feed";

@Component({
  selector: 'my-job-postings-page',
  imports: [NavbarWrapper, Footer, JobPostingsCounter, NewJobPostingButton, UserJobPostingsFeed],
  templateUrl: './my-job-postings-page.html',
  styleUrl: './my-job-postings-page.scss',
})
export class MyJobPostingsPage {

  contrataService = inject(ContrataService);
  currentPage = signal<number>(0);

  currentUserJobPostingsResource = rxResource<PaginaJobResponse, number>({
    params: () => this.currentPage(),
    stream: ({ params }) =>
      this.contrataService.getOfertasContrataPage(params)
  })
}
