import { FormControl } from "@angular/forms"

export interface LoginRequest {
    username: string,
    password: string
}

export interface LoginFormGroup {
    username: FormControl<string>,
    password: FormControl<string>
}