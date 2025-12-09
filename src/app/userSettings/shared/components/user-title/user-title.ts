import { Component, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../../shared/globalState/login/login.selector';

@Component({
  selector: 'user-title',
  imports: [],
  templateUrl: './user-title.html',
  styleUrl: './user-title.scss',
})
export class UserTitle { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);
}
