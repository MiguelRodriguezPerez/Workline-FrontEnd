import { FormGroup } from "@angular/forms";
import { UsuarioSettingsDto, UsuarioSettingsForm } from "./UsuarioSettingsDto";

export class UsuarioSettingsMapper {
    static mapFormToUsuarioSettingsDto(
        form: FormGroup<UsuarioSettingsForm>,
        originalDto: UsuarioSettingsDto ): UsuarioSettingsDto {
            const { nombre, email, telefono, ciudad } = form.value;

            return {
                id: originalDto.id,
                nombre: nombre!,
                email: email!,
                telefono: telefono!,
                ciudad: ciudad!
            };
        }
}