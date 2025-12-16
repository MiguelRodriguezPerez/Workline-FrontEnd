import { Component, inject, signal } from '@angular/core';
import { InputText } from "primeng/inputtext";
import { Button } from "primeng/button";
import { FormBuilder, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { UserSettingsService } from '../../../services/user-settings.service';
import { Router, RouterModule } from '@angular/router';
import { VerifiedPasswordContextService } from '../../../context/verified-password-context.service';

@Component({
  selector: 'change-password-first-step-container',
  imports: [InputText, Button, ɵInternalFormsSharedModule, ReactiveFormsModule, RouterModule],
  templateUrl: './change-password-first-step-container.html',
  styleUrl: './change-password-first-step-container.scss',
})
export class ChangePasswordFirstStepContainer { 
  
  private fb = inject(FormBuilder);
  private userSettingsService = inject(UserSettingsService);
  private router = inject(Router);
  isPasswordWrong = signal<boolean>(false);
  private verifiedPasswordContext = inject(VerifiedPasswordContextService);

  firstPasswordStepForm = this.fb.group({
    verifyPassword: ['', [],[]]
  });

  submitEvent () {
    const passwordValue: string = this.firstPasswordStepForm.get('verifyPassword')!.value!;

    this.userSettingsService.verifyCurrentPassword(passwordValue).subscribe({
      next: (response) => {
        if (response) {
          this.verifiedPasswordContext.changePasswordVerified(response);
          this.router.navigate(['/userSettings/changePasswordSecondStep']);
        }
        else this.isPasswordWrong.set(true);
      }
    })

  }
}
