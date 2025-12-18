import { Component, inject } from '@angular/core';
import { Button } from "primeng/button";
import { UserSettingsService } from '../../../../services/user-settings.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { requestLogout } from '../../../../../shared/globalState/login/login.action';

@Component({
  selector: 'delete-account-freeze-screen',
  imports: [Button],
  templateUrl: './delete-account-freeze-screen.html',
  styleUrl: './delete-account-freeze-screen.scss',
})
export class DeleteAccountFreezeScreen {

  private userSettingsService = inject(UserSettingsService);
  private store = inject(Store);
  private router = inject(Router);

  closeFreezeScreenEvent() {
    document.getElementById('delete-account-freeze-screen')!.style.height = '0%';
    document.body.style.overflow = '';
  }

  deleteAccountClickEvent () {
    this.userSettingsService.deleteLoggedUser().subscribe({
      next: () => {
        this.store.dispatch(requestLogout());
        this.router.navigate(['/']);
      }
    })
  }
}
