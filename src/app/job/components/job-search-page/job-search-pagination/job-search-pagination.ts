import { Component, input, output } from '@angular/core';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'job-search-pagination',
  imports: [PaginatorModule],
  templateUrl: './job-search-pagination.html',
  styleUrl: './job-search-pagination.scss',
})
export class JobSearchPagination { 
  
  numeroPaginas = input.required<number>();
  numeroOfertasPorPagina = input.required<number>();
  eventoPaginacion = output<PaginatorState>();

  onPageChangeCallback(arg: PaginatorState) {
    this.eventoPaginacion.emit(arg);
  }
}
