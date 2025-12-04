import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class GlobalFormUtils {

    static phoneRegex: RegExp = /^(6|7|8|9)\d{8}$/;
    static passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).*$/;
    static onlyCharactersRegex: RegExp = /^[a-zA-Z ]+$/;
    static onlyNumbersRegex: RegExp = /^[0-9]+$/;

    /* Evalúa las claves del objeto errores que suele ser { validacionErronea : valorEsperado} 
    y devuelve un string según el error */

    private static getTextError (errors: ValidationErrors): string | null {
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                   return 'Este campo es requerido';
                case 'email':
                   return 'Email no válido';
                case 'minlength':
                    return `Minímo de ${ errors['minlength'].requiredLength } carácteres.`;
                case 'maxlength':
                    return `Máximo de ${ errors['maxlength'].requiredLength } carácteres`;
                case 'pattern':
                    /* Los errores basados en regex llevan su propio switch */
                    return this.getRegexTextError(errors['pattern'].requiredPattern);
                default:
                    return `Error no controlado: ${errors[key]}`;
            }
        }
        return null;
    }

    private static getRegexTextError (errorRegex: string): string | null {
        console.warn('Sospechoso de fallar')
        console.warn('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).*$/' === this.passwordRegex.toString());

        switch (true) {
            case errorRegex === this.passwordRegex.toString():
                return 'La contraseña debe tener mayúsculas, minúsculas, números y carácteres especiales'
            case errorRegex === this.phoneRegex.toString():
                return 'Teléfono no válido'
        }

        return null;
    }

    /* Para saber si un formControl tiene errores, necesitas comprobar si tiene errores comprobando
    la existencia del campo errors y si ha sido manipulado (touched)
    
    No soy capaz de explicar porque se tienen que evalúar estricamente en ese orden */
    static isFormControlValid (formControl: AbstractControl): boolean {
        return (
            !!formControl.errors &&
            formControl.touched
        )
    }

    /* Este método se ejecuta después de haber comprobado que existen errores en el formControl y 
    devuelve el texto que mostrará el <span> del error */
    static getFieldErrorText (formControl: AbstractControl): string | null {
        console.log('aaaaaaaa');
        
        if (!formControl) return null;
        return this.getTextError(formControl.errors ?? {});
    }
    
}