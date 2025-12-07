import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.reducer";
import { WorklineState } from "../app.state";
import { LoggedUserContext } from '../../objects/interfaces/LoggedUserContextInterface';

/* En ngrx no puedes seleccionar directamente los campos del contexto global que te plazcan.

En su lugar tienes que declarar selectores que te devuelvan los datos que necesites. En este caso
tienes dos selectores.

Los selectores son funciones puras que siempre devuelven observables*/

/* Devuelve el LoginState */
export const selectLoginState = createSelector(
    (state: WorklineState) => state.loginState,
    (loginState) => loginState
);

/* Del LoginState devuelve loggedUser */
export const selectLoggedUser = createSelector(
    selectLoginState,
    (state: LoginState) => state.loggedUser
);

export const selectUserConocimientos = createSelector(
    selectLoginState,
    (state: LoginState) => state.loggedUser!.conocimientos ?? []
);

export const selectUserExperiencias = createSelector(
    selectLoginState,
    (state: LoginState) => state.loggedUser!.experiencias ?? []
)