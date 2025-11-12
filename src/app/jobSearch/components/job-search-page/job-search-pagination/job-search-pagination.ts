import { Component, effect, input, output, signal, ViewChild } from '@angular/core';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'job-search-pagination',
  imports: [PaginatorModule],
  templateUrl: './job-search-pagination.html',
  styleUrl: './job-search-pagination.scss',
})
export class JobSearchPagination { 
  
  paginaActual = input.required<number>();
  numeroPaginas = input.required<number>();
  numeroOfertasPorPagina = input.required<number>();
  numeroResultados = input.required<number>();
  eventoPaginacion = output<PaginatorState>();
  currentFirst = signal<number>(0);
  
  // TODO: Comentar
  constructor() {
    effect(() => {
      this.currentFirst.set(this.paginaActual() * this.numeroOfertasPorPagina());
    });
  }

  onPageChangeCallback(arg: PaginatorState) {
    this.eventoPaginacion.emit(arg);
  }

}
