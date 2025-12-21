import { Component, effect, inject, signal, Signal } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { CandidateInfoCard } from "../../components/candidate-detail-page/candidate-info-card/candidate-info-card";
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { BuscaService } from '../../../shared/services/busca.service';
import { BuscaDto } from '../../../shared/objects/interfaces/busca/BuscaDto';
import { CandidateEntityGrid } from "../../components/candidate-detail-page/candidate-entity-grid/candidate-entity-grid";
import { GoBackLink } from "../../../shared/components/go-back-link/go-back-link";


@Component({
  selector: 'candidate-detail-page',
  imports: [NavbarWrapper, Footer, CandidateInfoCard, CandidateEntityGrid],
  templateUrl: './candidate-detail-page.html',
  styleUrl: './candidate-detail-page.scss',
})
export class CandidateDetailPage { 
  buscaService = inject(BuscaService);
  activatedRoute = inject(ActivatedRoute);
  buscaDto = signal<BuscaDto | undefined>(undefined);

  searchEffect = effect(() => {
      const id = parseInt(this.activatedRoute.snapshot.paramMap.get('candidate_id')!);
      if (!id) return;

      this.buscaService.getBuscaById(id).subscribe(dto => {
        console.log(dto);
        
        this.buscaDto.set(dto);
      });
    });
}
