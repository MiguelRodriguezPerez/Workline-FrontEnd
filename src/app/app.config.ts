import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// import Aura from '@primeuix/themes/aura'; 
/* This import was simply not possible because of the error:
 Cannot find module '@primeuix/themes/aura' or its corresponding type declarations */
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { LoginEffects } from './shared/globalState/login/login.effect';
import { loginReducer } from './shared/globalState/login/login.reducer';
import { sharedInterceptor } from './shared/interceptors/shared.interceptor';
import { localStorageMetaReducer } from './shared/globalState/localStorage.metareducer';


export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideHttpClient(withFetch(), withInterceptors([sharedInterceptor])),
        providePrimeNG({
            theme: {
                preset: null
            }
        }),
        provideStore({
            loginState: loginReducer
        },{
            metaReducers: [localStorageMetaReducer]
        }),
        provideState('loginState', loginReducer),
        provideEffects([LoginEffects]),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
};
