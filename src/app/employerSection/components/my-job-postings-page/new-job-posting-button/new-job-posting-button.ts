import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ButtonDirective } from "primeng/button";

@Component({
  selector: 'new-job-posting-button',
  imports: [ButtonDirective, RouterLink],
  templateUrl: './new-job-posting-button.html',
  styleUrl: './new-job-posting-button.scss',
})
export class NewJobPostingButton { }
