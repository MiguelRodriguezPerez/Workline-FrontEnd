import { createAction, props } from "@ngrx/store";
import { LoginRequest } from "../../../login/interfaces/LoginRequestFormGroup";
import { LoggedUserContext } from '../../objects/interfaces/LoggedContextInterface';

/* En ngrx, las acciones son las opciones que tendrás para alterar el contexto desde un componente */

export const updateLoggedUser = createAction(
    '[User Logged] Upload login',
    props<{ content: LoggedUserContext }>()
);

export const requestLogin = createAction(
    '[User Logged API] Request login',
    props<{ loginRequest: LoginRequest }>()
);

export const failedRequestLogin = createAction(
    '[User Logged API] Failed request login',
    props<{ content: Error }>()
);

export const succededRequestLogin = createAction(
    '[User Logged API] Succeded request login',
    props<{ content: LoggedUserContext }>()
);

export const requestLogout = createAction('[User Logged API] Request logout');

export const succededLogoutRequest = createAction('[User Logged API] Logout succeeded');

export const failedRequestLogout = createAction(
    '[User Logged API] Failed logout request',
    props<{ content: Error }>()
);