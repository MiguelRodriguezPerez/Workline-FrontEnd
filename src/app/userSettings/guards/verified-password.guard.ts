import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { VerifiedPasswordContextService } from '../context/verified-password-context.service';

export const verifiedPasswordGuard: CanActivateFn = (route, state) => {
  const verifiedPasswordContext = inject(VerifiedPasswordContextService);
  const router = inject(Router);

  if (verifiedPasswordContext.isPasswordVerified()) 
    return true;
  else {
    router.navigate(['/userSettings/changePasswordFirstStep']);
    return false;
  }
  
};
