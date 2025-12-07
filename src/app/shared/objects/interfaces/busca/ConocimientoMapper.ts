import { FormGroup } from "@angular/forms";
import { ConocimientoDto, ConocimientoForm } from "./ConocimientoDto";

export class ConocimientoMapper {

    static mapConocimientoFormToDto(form: FormGroup<ConocimientoForm>, originalConocimiento?: ConocimientoDto): ConocimientoDto {
        return {
            id: originalConocimiento ? originalConocimiento.id : null,
            centroEducativo: form.get('centroEducativo')!.value,
            titulo: form.get('titulo')!.value,
            inicioPeriodoConocimiento: form.get('inicioPeriodoConocimiento')!.value,
            finPeriodoConocimiento: form.get('finPeriodoConocimiento')!.value
        };
    }
}