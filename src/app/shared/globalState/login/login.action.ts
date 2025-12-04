import { createAction, props } from "@ngrx/store";
import { LoginRequest } from "../../../login/interfaces/LoginRequestFormGroup";
import { LoggedUserContext } from '../../objects/interfaces/LoggedUserContextInterface';

/* En ngrx, las acciones son las opciones que tendrás para alterar el contexto desde un componente */

export const updateLoggedUser = createAction(
    '[User Logged] Upload login',
    props<{ content: LoggedUserContext }>()
);

/* Acciones relacionadas con el login */

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

/* Acciones relacionadas con el logout */

export const requestLogout = createAction('[User Logged API] Request logout');

export const succededLogoutRequest = createAction('[User Logged API] Logout succeeded');

export const failedRequestLogout = createAction(
    '[User Logged API] Failed logout request',
    props<{ content: Error }>()
);

/* Acciones relacionadas a comprobar las credenciales de los usuarios */

export const checkUserCredentials = createAction(
    '[User Logged API] Checking user credentials'
);

export const checkUserCredentialsSucceded = createAction(
    '[User Logged API] User credentials remain valid'
);

export const checkUserCredentialsFailed = createAction(
    '[User Logged API] User credentials are not valid anymore'
);

/* Acciones relacionadas a la creación de usuarios */

export const newUserCreated = createAction(
    '[User Logged API] New user created',
    props<{ content: LoggedUserContext }>()
);