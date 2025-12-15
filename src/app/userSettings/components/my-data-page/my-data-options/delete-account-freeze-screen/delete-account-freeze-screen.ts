import { Component } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'delete-account-freeze-screen',
  imports: [Button],
  templateUrl: './delete-account-freeze-screen.html',
  styleUrl: './delete-account-freeze-screen.scss',
})
export class DeleteAccountFreezeScreen {
  closeFreezeScreenEvent() {
    document.getElementById('delete-account-freeze-screen')!.style.height = '0%';
    document.body.style.overflow = '';
  }
}
