import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class GlobalFormUtils {

    static phoneRegex: RegExp = /^(6|7|8|9)\d{8}$/;
    static passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).*$/;
    static onlyCharactersRegex: RegExp = /^[a-zA-Z ]+$/;
    static onlyNumbersRegex: RegExp = /^[0-9]+$/;
    // Es larga porque impide días incorrectos como el 30 de febrero
    static dateRegex: RegExp = /^(?:(?:31\/(?:0[13578]|1[02]))|(?:30\/(?:0[13-9]|1[0-2]))|(?:29\/02\/(?:(?:[02468][048]00)|(?:[13579][26]00)|(?:\d{2}(?:0[48]|[2468][048]|[13579][26]))))|(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2]))\/\d{4}$/;

    /* Evalúa las claves del objeto errores que suele ser { validacionErronea : valorEsperado} 
    y devuelve un string según el error */

    private static getTextError (errors: ValidationErrors): string | null {
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'usernameAlreadyTaken':
                    return 'Este nombre de usuario ya existe';
                case 'required':
                   return 'Este campo es requerido';
                case 'email':
                   return 'Email no válido';
                case 'minlength':
                    return `Minímo de ${ errors['minlength'].requiredLength } carácteres.`;
                case 'maxlength':
                    return `Máximo de ${ errors['maxlength'].requiredLength } carácteres`;
                case 'ordenFechasIncorrecto':
                    return 'La fecha de inicio es posterior a la del final';
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
        switch (true) {
            case errorRegex === this.passwordRegex.toString():
                return 'La contraseña debe tener mayúsculas, minúsculas, números y carácteres especiales';
            case errorRegex === this.phoneRegex.toString():
                return 'Teléfono no válido';
            case errorRegex === this.dateRegex.toString():
                return 'Fecha inválida. La fecha ha de ser en formato dd/mm/yyyy';
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
        if (!formControl) return null;
        return this.getTextError(formControl.errors ?? {});
    }


    static compareDatesOrder: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const inicio = control.get('inicioExperiencia')?.value || control.get('inicioPeriodoConocimiento')?.value;
        const fin = control.get('finExperiencia')?.value || control.get('finPeriodoConocimiento')?.value;

        // Ya gestionará el error de requerido otro validador
        if (!inicio || !fin) return null; 
        
        return this.parseDate(fin) >= this.parseDate(inicio) ? 
            null : { ordenFechasIncorrecto: true } 
    }

    private static parseDate(date: string): Date {
        const [day, month, year] = date.split('/');
        return new Date(+year, +month - 1, +day);
    }
}