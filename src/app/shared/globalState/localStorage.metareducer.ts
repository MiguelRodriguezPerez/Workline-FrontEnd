import { ActionReducer, INIT } from '@ngrx/store';

export function localStorageMetaReducer<State>(
  reducer: ActionReducer<State>,
  key: string = 'appState'
): ActionReducer<State> {

  return (state, action) => {

    // Cargar estado almacenado solo al iniciar la app
    if (action.type === INIT) {
      const savedState = localStorage.getItem(key);
      if (savedState) {
        try {
          return JSON.parse(savedState);
        } catch {
          console.warn('Error al parsear estado desde localStorage');
        }
      }
    }

    // Reducir estado normalmente
    const nextState = reducer(state, action);

    // Guardar nuevo estado
    localStorage.setItem(key, JSON.stringify(nextState));

    return nextState;
  };
}
