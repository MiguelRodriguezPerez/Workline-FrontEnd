import { Component, input } from '@angular/core';

@Component({
  selector: 'job-posting-candidate-counter',
  imports: [],
  templateUrl: './job-posting-candidate-counter.html',
  styleUrl: './job-posting-candidate-counter.scss',
})
export class JobPostingCandidateCounter { 
  numeroCandidatos = input.required<number>();
}
