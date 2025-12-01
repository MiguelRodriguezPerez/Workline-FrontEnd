import { inject, Injectable, linkedSignal, signal } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";
import { PaginaJobResponse } from "../../jobSearch/objects/interfaces/PaginaJobResponse";
import { OfertaDtoJobSearch } from '../../shared/objects/interfaces/oferta/OfertaDtoJobSearch';
import { ContrataService } from "../service/contrata.service";
import { OfertaDtoEmployer } from "../../shared/objects/interfaces/oferta/OfertaDtoEmployer";
import { EmployerPageResponse } from "../interfaces/EmployerPageResponse";

@Injectable({ providedIn: 'root' })
export class JobPostingContextService {
    private contrataService = inject(ContrataService);

    currentPage = signal<number>(0);
    currentJobPostingArr = linkedSignal<OfertaDtoEmployer[]>(() =>
        this.currentUserJobPostingsResource.value()?.content ?? []
    );

    currentUserJobPostingsResource = rxResource<EmployerPageResponse, number>({
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
