import { createReducer, on } from "@ngrx/store";
import { LoggedUserContext } from '../../objects/interfaces/LoggedContextInterface';
import { failedRequestLogin, requestLogin, succededRequestLogin, updateLoggedUser, requestLogout, checkUserCredentialsFailed } from "./login.action";

/* Esta interface define la plantilla del estado del usuario logueado (No confundir con los datos
del usuario en si). initialState define como será este estado por defecto y al hacer logout */

export interface LoginState {
    loggedUser: LoggedUserContext | null,
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: LoginState = {
    loggedUser: null,
    status: 'pending'
}

/* El reducer define que hacer cuando desde un componente ejecutas una de las acciones
en el contexto global */

export const loginReducer = createReducer(

    initialState,

    /* WARNING: Probablemente estos tres primeros sean inútiles */
    on(updateLoggedUser, (state, { content }) => ({
        ...state,
        loggedUser: {
            ...content
        }
    })),

    on(requestLogout, (state) => ({
        ...initialState
    })),

    on(requestLogin, (state) => ({
        ...state,
        status: 'loading'
    })),

    on(succededRequestLogin, (state, { content }) => ({
        ...state,
        loggedUser: content, // No debería ser null
        status: 'success'
    })),

    on(failedRequestLogin, (state) => ({
        ...state,
        loggedUser: null, // Es null
        status: "error"
    })),

    on(checkUserCredentialsFailed, () => ({
        ...initialState
    })),

)