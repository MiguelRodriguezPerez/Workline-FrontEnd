import { inject, Injectable, linkedSignal, signal } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";
import { OfertaDtoEmployer } from "../../shared/objects/interfaces/oferta/OfertaDtoEmployer";
import { EmployerPageResponse } from "../interfaces/EmployerPageResponse";
import { ContrataService } from "../service/contrata.service";

@Injectable({ providedIn: 'root' })
export class JobPostingContextService {
    private contrataService = inject(ContrataService);

    currentUserJobPostingsResource = rxResource<EmployerPageResponse, number>({
        params: () => this.currentPage(),
        stream: ({ params }) => {
            return this.contrataService.getOfertasContrataPage(params)
        }
    });

    currentPage = signal<number>(0);
    currentJobPostingArr = linkedSignal<OfertaDtoEmployer[]>(() =>
        this.currentUserJobPostingsResource.value()?.content ?? []
    );

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
