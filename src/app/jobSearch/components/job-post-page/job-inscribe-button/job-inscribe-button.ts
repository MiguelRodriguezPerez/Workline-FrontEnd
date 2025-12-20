import { NgClass } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Button } from "primeng/button";
import { selectLoggedUser } from '../../../../shared/globalState/login/login.selector';
import { BuscaService } from '../../../../shared/services/busca.service';
import { OfertaService } from '../../../services/oferta.service';

@Component({
  selector: 'job-inscribe-button',
  imports: [Button, NgClass],
  templateUrl: './job-inscribe-button.html',
  styleUrl: './job-inscribe-button.scss',
})
export class JobInscribeButton {

  // Por defecto obtendrá 0
  jobPostId = input.required<number>();
  loggedUser = inject(Store).selectSignal(selectLoggedUser);
  private ofertaService = inject(OfertaService);
  private buscaService = inject(BuscaService);
  isUserInscribed = signal<null | boolean>(null);

  anotherInputEffect = effect(() => {
    if (this.loggedUser()?.rol !== 'BUSCA') return;

    const id = this.jobPostId();
    this.buscaService.isUserInscribedInJobPosting(id).subscribe({
      next: (response) => this.isUserInscribed.set(response)
    })
  });

  inscribeUserEvent() {
    if (this.isUserInscribed()) {
      this.ofertaService.desinscribirUsuarioOferta(this.jobPostId()!).subscribe({
        next: () => this.isUserInscribed.set(false)
      })
    }
    else {
      this.ofertaService.inscribirUsuarioEnOferta(this.jobPostId()!).subscribe({
        next: () => this.isUserInscribed.set(true)
      })
    }
  }

}
