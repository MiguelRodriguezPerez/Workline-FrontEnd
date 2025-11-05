import { Component, input } from '@angular/core';
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
  eventoPaginacion = input.required<(arg: any) => void>();

  onPageChange1(event: PaginatorState) {
    /* El doble parentesis es porque el callback es una señal y tienes que llamar al signal y al callback */
    this.eventoPaginacion()(event);
  }
}
