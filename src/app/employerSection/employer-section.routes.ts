import { Routes } from "@angular/router";
import { MyJobPostingsPage } from "./pages/my-job-postings-page/my-job-postings-page";
import { NewJobPostingPage } from './pages/new-job-posting-page/new-job-posting-page';
import { JobPostDetailPage } from "./pages/job-post-detail-page/job-post-detail-page";
import { CandidateDetailPage } from './pages/candidate-detail-page/candidate-detail-page';

/* NOTA: Las rutas hijas de una padre se renderizan DENTRO de la página del padre */

export const employerSectionRoutes: Routes = [
    {
        path: 'myJobPostings',
        component: MyJobPostingsPage
    },
    {
        path: 'newJobPost',
        component: NewJobPostingPage
    },
    {
        path: 'jobPostDetail/:id',
        component: JobPostDetailPage,
    },
    {
        path: 'jobPostDetail/:id/candidateDetail/:candidate_id',
        component: CandidateDetailPage
    }
]