import { Component } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'delete-account-button',
  imports: [Button],
  templateUrl: './delete-account-button.html',
  styleUrl: './delete-account-button.scss',
})
export class DeleteAccountButton { 
  
  openFreezeScreenEvent () {
    document.getElementById('delete-account-freeze-screen')!.style.height = '100%';
    document.body.style.overflow = 'hidden';
  }
}
