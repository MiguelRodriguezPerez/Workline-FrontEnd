import { Component, input } from '@angular/core';

@Component({
  selector: 'job-result-counter',
  imports: [],
  templateUrl: './job-result-counter.html',
  styleUrl: './job-result-counter.scss',
})
export class JobResultCounter { 

  numOfertasResultado = input.required<number>();
  
}
