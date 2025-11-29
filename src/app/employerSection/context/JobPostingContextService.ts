import { inject, Injectable, linkedSignal, signal } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";
import { PaginaJobResponse } from "../../jobSearch/objects/interfaces/PaginaJobResponse";
import { Oferta } from '../../shared/objects/interfaces/oferta/Oferta';
import { ContrataService } from "../service/contrata.service";

@Injectable({ providedIn: 'root' })
export class JobPostingContextService {
    private contrataService = inject(ContrataService);

    currentPage = signal<number>(0);
    currentJobPostingArr = linkedSignal<Oferta[]>(() =>
        this.currentUserJobPostingsResource.value()?.content ?? []
    );

    currentUserJobPostingsResource = rxResource<PaginaJobResponse, number>({
        params: () => this.currentPage(),
        stream: ({ params }) => {
            return this.contrataService.getOfertasContrataPage(params)
        }
    });

    changePage(page: number) {
        this.currentPage.set(page);
    }

    removeJobPosting(id: number) {
        const updatedArr = this.currentJobPostingArr().filter(jobPost => jobPost.id !== id);
        this.currentJobPostingArr.set(updatedArr);
        /* Si no refrescas el contenido, te quedará el hueco de la oferta vacío */
        this.currentUserJobPostingsResource.reload();
    }

}
