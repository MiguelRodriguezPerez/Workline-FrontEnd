import { Component, inject } from '@angular/core';
import { InputText } from "primeng/inputtext";
import { Button } from "primeng/button";
import { FormBuilder, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { UserSettingsService } from '../../../services/user-settings.service';

@Component({
  selector: 'change-password-first-step-container',
  imports: [InputText, Button, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './change-password-first-step-container.html',
  styleUrl: './change-password-first-step-container.scss',
})
export class ChangePasswordFirstStepContainer { 
  
  private fb = inject(FormBuilder);
  private userSettingsService = inject(UserSettingsService);

  firstPasswordStepForm = this.fb.group({
    verifyPassword: ['', [], this.userSettingsService.verifyCurrentPassword()]
  });
}
