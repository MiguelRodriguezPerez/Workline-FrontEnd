import { Component, effect, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../../shared/globalState/login/login.selector';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'aside-options-phone',
  imports: [Select, FormsModule],
  templateUrl: './aside-options-phone.html',
  styleUrl: './aside-options-phone.scss',
})
export class AsideOptionsPhone { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);

  menuOptions = [
    { label: 'Mis datos', value: 'myData' },
  ];

  defaultValue = this.menuOptions[0];
  // TODO: Asignar default value en el efecto según url

  private _ngrxEffect = effect(() => {
    const user = this.currentUser();

    if (user!.rol === 'BUSCA') 
      this.menuOptions.push(
        { label: 'Mis conocimientos', value: 'conocimientos' },
        { label: 'Mis experiencias', value: 'experiencias' },
        { label: 'Mis ofertas', value: 'ofertas' }
      );
    
  })
}
