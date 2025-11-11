import { Component, signal } from '@angular/core';
import { JobSearchForm } from "../job-search-form/job-search-form";

@Component({
  selector: 'job-search-form-tablet',
  imports: [JobSearchForm],
  templateUrl: './job-search-form-tablet.html',
  styleUrl: './job-search-form-tablet.scss',
})
export class JobSearchFormTablet {

  /* Normalmente para estas cosas se suele usar una variable booleana para controlar su estado
  pero este callback se pasa a un hijo y al comprobar la variable que estaría presente en esta clase
  fallaría porque no esta presente en el componente hijo (JobSearchForm) 
  
  Lo suyo sería controlarlo con un output, pero me parece más sencillo controlar si se puede hacer
  scroll o no, ya que en ningún otro supuesto vas a querer bloquear la pantalla */

  phoneFormEvent() {
    if (document.body.style.overflow !== 'hidden') {
      /* No se porque 100% si funciona y 100vh no */
      document.getElementById('tablet-form-container')!.style.height = '100%';
      /* Evita que se pueda hacer scroll hacia los elementos que estén fuera de la ventana */
      document.body.style.overflow = 'hidden'
    }
    else {
      document.getElementById('tablet-form-container')!.style.height = '0vh';
      /* Lo desahce */
      document.body.style.overflow = '';
    }
  }
}
