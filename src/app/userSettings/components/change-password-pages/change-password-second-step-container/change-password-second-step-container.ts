import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { GlobalFormUtils } from '../../../../shared/globalFormUtils';
import { VerifiedPasswordContextService } from '../../../context/verified-password-context.service';
import { UserSettingsService } from '../../../services/user-settings.service';

@Component({
  selector: 'change-password-second-step-container',
  imports: [RouterModule, ReactiveFormsModule, Button, InputText],
  templateUrl: './change-password-second-step-container.html',
  styleUrl: './change-password-second-step-container.scss',
})
export class ChangePasswordSecondStepContainer { 
  private fb = inject(FormBuilder);
  private userSettingsService = inject(UserSettingsService);
  private router = inject(Router);
  private verifiedPasswordContext = inject(VerifiedPasswordContextService);
  globalFormUtils = GlobalFormUtils;

  secondPasswordStepForm = this.fb.group({
    newPassword: ['', [ Validators.pattern(this.globalFormUtils.passwordRegex)], [] ]
  });

  changePasswordSubmit () {
    if (!this.secondPasswordStepForm.valid) return;

    const newPasswordValue: string = this.secondPasswordStepForm.get('newPassword')!.value!;

    this.userSettingsService.changePassword(newPasswordValue).subscribe({
      next: () => {
        this.verifiedPasswordContext.changePasswordVerified(false);
        alert('Contraseña cambiada correctamente');
        this.router.navigate(['/userSettings/myData']);
      }
    })
  }
}
