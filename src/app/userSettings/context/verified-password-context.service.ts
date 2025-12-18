
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifiedPasswordContextService {

  /* Este contexto sirve para evitar que un usuario que no ha verificado su contraseña no pueda acceder
  al segundo paso donde se cambia la contraseña. Dicha ruta estará siendo controlada por un interceptor
  y si el valor de este contexto no es true, redirigirá al primer paso */

  private isPasswordVerifiedSignal = signal<boolean>(false);

  changePasswordVerified (newValue: boolean) {
    this.isPasswordVerifiedSignal.set(newValue);
  }

  isPasswordVerified () {
    return this.isPasswordVerifiedSignal();
  }
}
