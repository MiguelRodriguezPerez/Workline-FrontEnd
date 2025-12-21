import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'go-back-link',
  imports: [],
  templateUrl: './go-back-link.html',
  styleUrl: './go-back-link.scss',
})
export class GoBackLink { 
  optionalRoute = input.required<string>();
  /* Si unique route existe y es true, significa que este span siempre redirigirá a una única ruta */
  uniqueRoute = input<boolean>();

  private location = inject(Location);
  private router = inject(Router);

  goBackEvent() {
    if (this.uniqueRoute()) {
      this.router.navigateByUrl(this.optionalRoute());
      return;
    }

    if (history.length > 0) this.location.back();
    else this.router.navigateByUrl(this.optionalRoute());
  }
}
