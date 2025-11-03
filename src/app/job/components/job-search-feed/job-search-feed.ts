import { Component, input, OnInit } from '@angular/core';
import { Oferta } from '../../objects/interfaces/Oferta';
import { JobSearchCard } from './job-search-card/job-search-card';
import { JobSearchFeedLoading } from "./job-search-feed-loading/job-search-feed-loading";

@Component({
  selector: 'job-search-feed',
  imports: [JobSearchCard, JobSearchFeedLoading],
  templateUrl: './job-search-feed.html',
  styleUrl: './job-search-feed.scss',
})
export class JobSearchFeed implements OnInit { 

  listaOfertas = input.required<Oferta[]>();

  ngOnInit(): void {
      console.log(this.listaOfertas());   
  }
}
