import { Component, inject } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'new-job-posting-page',
  imports: [NavbarWrapper, Footer],
  templateUrl: './new-job-posting-page.html',
  styleUrl: './new-job-posting-page.scss',
})
export class NewJobPostingPage { 

  
}
