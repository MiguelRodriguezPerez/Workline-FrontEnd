import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BusquedaOferta, BusquedaOfertaFormGroup } from '../interfaces/BusquedaOferta';
export class BusquedaOfertaMapper {

    /* Recibes un objeto con varios FormControl */
    static mapBusquedaOferta(formGroup: FormGroup<BusquedaOfertaFormGroup>): BusquedaOferta {
        /* Los nombres de los formGroup y los campos de BusquedaOferta son los mismos.
        Defino un objeto vacío y le añado campos de la BusquedaOferta */

        const resultado: any = {}

        for(const [key,control] of Object.entries(formGroup.controls)) {
            resultado[key] = control.value;
        }

        return resultado as BusquedaOferta;
    }
}