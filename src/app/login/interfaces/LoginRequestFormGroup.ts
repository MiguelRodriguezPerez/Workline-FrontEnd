import { FormControl } from "@angular/forms"

export interface LoginRequestFormGroup {
    username: FormControl<string>,
    password: FormControl<string>
}