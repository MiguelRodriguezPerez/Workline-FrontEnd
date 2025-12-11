import { Component, effect, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../../shared/globalState/login/login.selector';
import { Select, SelectChangeEvent } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'aside-options-phone',
  imports: [Select, FormsModule],
  templateUrl: './aside-options-phone.html',
  styleUrl: './aside-options-phone.scss',
})

/* Este dropdown aparecerá en el menú de miPerfil para navegar entre las distintas secciones de la página.
No se como lograr que tenga por defecto el valor con la url actual. 

Lo que hice fue ponerle una por defecto y luego hacer que en base a la url actual decida su valor.*/
export class AsideOptionsPhone { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);
  currentRoute = inject(Router);

  menuOptions = [
    { label: 'Mis datos', value: 'myData' },
  ];

  defaultValue = this.menuOptions[0];
  
  private _ngrxEffect = effect(() => {
    const user = this.currentUser();

    if (user!.rol === 'BUSCA') 
      this.menuOptions.push(
        { label: 'Mis conocimientos', value: 'myKnowledge' },
        { label: 'Mis experiencias', value: 'myExperience' },
        { label: 'Mis ofertas', value: 'myJobPostings' }
    );

    const currentSectionRoute = this.currentRoute.url.split('/')[2];

    this.menuOptions.forEach(option => {
      if (option.value === currentSectionRoute)
        this.defaultValue = option;
    })
  });

  redirectEvent (event: SelectChangeEvent) {
    this.currentRoute.navigate(['userSettings',event.value.value]);
  }
}
