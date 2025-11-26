import { FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtilsJobPosting {

    static onlyCharactersRegex: string = '^[a-zA-Z ]+$';
    static onlyNumbersRegex: string = '^[0-9]+$';

    private static getTextError (error: ValidationErrors): string | null {
        for (const key of Object.keys(error)) {
            switch (key) {
                case 'requiered':
                   return 'Este campo es requerido';
                case 'minlength':
                    return `Minímo de ${error['minlength'].requiredLength} carácteres.`;
                case 'required':
                    return `Campo obligatorio`;
                case 'pattern':
                    return this.manageRegexError(error['pattern'].requiredPattern);
                default:
                    return `Error no controlado: ${key}`;
            }
        }
        return null;
    }

    private static manageRegexError (errorTxt: string) {
        switch (true) {
            case errorTxt === this.onlyCharactersRegex :
                return 'Solo carácteres';
            case errorTxt === this.onlyNumbersRegex :
                return 'Solo números';
            default:
                return `Pattern no controlado: ${errorTxt}`;
        }
    }

    static isValidField (form: FormGroup, fieldName: string): boolean | null {
        return (
            !!form.controls[fieldName].errors &&
            form.controls[fieldName].touched
        );
    }

    static getFieldError(form: FormGroup, fieldName: string ): string | null {
        if (!form.controls[fieldName]) return null;
       return this.getTextError(form.controls[fieldName].errors ?? {});
    }
}