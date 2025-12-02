import { Component, effect, input, output, signal } from '@angular/core';
import { PaginatorState, Paginator } from 'primeng/paginator';

@Component({
  selector: 'wk-paginator',
  imports: [Paginator],
  templateUrl: './wk-paginator.html',
  styleUrl: './wk-paginator.scss',
})
export class WkPaginator { 

  paginaActual = input.required<number>();
  numeroPaginas = input.required<number>();
  numeroOfertasPorPagina = input.required<number>();
  numeroResultados = input.required<number>();
  paginacionOutput = output<number>();
  currentFirst = signal<number>(0);

  constructor() {
    effect(() => {
      this.currentFirst.set(this.paginaActual() * this.numeroOfertasPorPagina());
    });
  }

  onPageChangeCallback(arg: PaginatorState) {
    this.paginacionOutput.emit(arg.page ?? 0);
  }

}
