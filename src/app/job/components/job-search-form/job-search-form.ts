import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { TipoContrato } from '../../enums/TipoContrato';


@Component({
  selector: 'job-search-form',
  imports: [MatSelectModule],
  templateUrl: './job-search-form.html',
  styleUrl: './job-search-form.scss',
})
export class JobSearchForm { 
  tiposContratoValues = Object.values(TipoContrato);

}
