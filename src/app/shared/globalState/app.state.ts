import { LoginState } from "./login/login.reducer";

/* Esta interface define una plantilla para el estado global de la aplicación.
Si necesitas controlar el estado global de otro objeto, tendrás que declararlo aquí.

Cada objeto usará su propia carpeta con reducers, actions...*/

export interface WorklineState {
    loginState: LoginState
}