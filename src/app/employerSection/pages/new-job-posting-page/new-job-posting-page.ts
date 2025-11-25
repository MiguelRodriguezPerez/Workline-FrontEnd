import { Component, inject } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { JobPostingForm } from "../../components/new-job-posting-page/job-posting-form/job-posting-form";

@Component({
  selector: 'new-job-posting-page',
  imports: [NavbarWrapper, Footer, JobPostingForm],
  templateUrl: './new-job-posting-page.html',
  styleUrl: './new-job-posting-page.scss',
})
export class NewJobPostingPage { 

  
}
