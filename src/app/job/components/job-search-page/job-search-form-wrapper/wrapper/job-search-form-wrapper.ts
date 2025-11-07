import { Component, HostListener, signal } from '@angular/core';
import { JobSearchFormPc } from '../job-search-form-pc/job-search-form-pc';
import { JobSearchFormTablet } from '../job-search-form-tablet/job-search-form-tablet';


@Component({
  selector: 'job-search-form-wrapper',
  imports: [JobSearchFormPc, JobSearchFormTablet],
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
