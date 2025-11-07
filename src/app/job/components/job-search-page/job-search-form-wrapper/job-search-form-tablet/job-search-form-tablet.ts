import { Component, signal } from '@angular/core';

@Component({
  selector: 'job-search-form-tablet',
  imports: [],
  templateUrl: './job-search-form-tablet.html',
  styleUrl: './job-search-form-tablet.scss',
})
export class JobSearchFormTablet { 

  isFormOpen = signal<boolean>(false);



  phoneFormEvent () {
    if (!this.isFormOpen()) {
      /* No se porque 100% si funciona y 100vh no */
      document.getElementById('tablet-form-container')!.style.height = '100%';
      /* Evita que se pueda hacer scroll hacia los elementos que estén fuera de la ventana */
      document.body.style.overflow = 'hidden';
      this.isFormOpen.set(true);
    }
    else {
      document.getElementById('tablet-form-container')!.style.height = '0vh';
      /* Lo desahce */
      document.body.style.overflow = '';
      this.isFormOpen.set(true);
    }
  }
}
