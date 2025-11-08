import { Component, HostListener, signal } from '@angular/core';
import { JobSearchFormTablet } from '../job-search-form-tablet/job-search-form-tablet';
import { JobSearchForm } from '../job-search-form/job-search-form';


@Component({
  selector: 'job-search-form-wrapper',
  imports: [JobSearchForm, JobSearchFormTablet],
  templateUrl: './job-search-form-wrapper.html',
  styleUrl: './job-search-form-wrapper.scss',
})
export class JobSearchFormWrapper {

  currentWindowWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  checkCurrentWindowWidth() {
    this.currentWindowWidth.set(window.innerWidth);
  }
}
